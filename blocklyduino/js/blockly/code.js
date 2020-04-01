/**
 * @license
 * Copyright 2012 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Arduino, hacked from Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 * @author scanet@libreduc.cc (Sébastien Canet)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Code = {};
Code.selectedTabBoard = "none";

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
    'de': 'Deutsch',
    'en': 'English',
    'fr': 'Français',
    'ja': '日本語'
};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if parameter not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function (name, defaultValue) {
    var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
    return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function () {
    var lang = Code.getStringParamFromUrl('lang', '');
    if (Code.LANGUAGE_NAME[lang] === undefined) {
        // Default to English.
        lang = 'en';
    }
    return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function () {
    return Code.LANGUAGE_RTL.indexOf(Code.LANG) !== -1;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function (defaultXml) {
    try {
        var loadOnce = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
        // Firefox sometimes throws a SecurityError when accessing sessionStorage.
        // Restarting Firefox fixes this, so it looks like a bug.
        var loadOnce = null;
    }
    if (loadOnce) {
        // Language switching stores the blocks during the reload.
        delete window.sessionStorage.loadOnceBlocks;
        var xml = Blockly.Xml.textToDom(loadOnce);
        Blockly.Xml.domToWorkspace(xml, Code.workspace);
    } else if (defaultXml) {
        // Load the editor with default starting blocks.
        var xml = Blockly.Xml.textToDom(defaultXml);
        Blockly.Xml.domToWorkspace(xml, Code.workspace);
    } else if ('BlocklyStorage' in window) {
        // Restore saved blocks in a separate thread so that subsequent
        // initialization is not affected from a failed load.
        window.setTimeout(BlocklyStorage.restoreBlocks, 0);
    }
};

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function () {
    // Store the blocks for the duration of the reload.
    // MSIE 11 does not support sessionStorage on file:// URLs.
    if (window.sessionStorage) {
        var xml = Blockly.Xml.workspaceToDom(Code.workspace);
        var text = Blockly.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }

    var languageMenu = document.getElementById('languageMenu');
    var newLang = encodeURIComponent(
            languageMenu.options[languageMenu.selectedIndex].value);
    var search = window.location.search;
    if (search.length <= 1) {
        search = '?lang=' + newLang;
    } else if (search.match(/[?&]lang=[^&]*/)) {
        search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
    } else {
        search = search.replace(/\?/, '?lang=' + newLang + '&');
    }

    window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
};

/**
 * Changes the output language by clicking the tab matching
 * the selected language in the codeMenu.
 */
Code.changeCodingLanguage = function () {
    var codeMenu = document.getElementById('code_menu');
    Code.tabClick(codeMenu.options[codeMenu.selectedIndex].value);
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Code.bindClick = function (el, func) {
    if (typeof el === 'string') {
        el = document.getElementById(el);
    }
    el.addEventListener('click', func, true);
    el.addEventListener('touchend', func, true);
};

/**
 * Load the Prettify CSS and Arduino.
 */
Code.importPrettify = function () {
    var script = document.createElement('script');
    script.setAttribute('src', './blocklyduino/js/addon/run_prettify.js');
    document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Code.getBBox_ = function (element) {
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    return {
        height: height,
        width: width,
        x: x,
        y: y
    };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * List of tab names.
 * @private
 */
Code.TABS_ = ['blocks', 'arduino'];

/**
 * List of tab names with casing, for display in the UI.
 * @private
 */
Code.TABS_DISPLAY_ = ['Blocks', 'Arduino'];

Code.selected = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Code.tabClick = function (clickedName) {
    if (document.getElementById('tab_blocks').classList.contains('tabon')) {
        Code.workspace.setVisible(false);
    }
    // Deselect the button, and ensure side panel is hidden
	Code.peekCode(false);
    // Deselect all tabs and hide all panes.
    for (var i = 0; i < Code.TABS_.length; i++) {
        var name = Code.TABS_[i];
        var tab = document.getElementById('tab_' + name);
        tab.classList.add('taboff');
        tab.classList.remove('tabon');
        document.getElementById('content_' + name).style.visibility = 'hidden';
    }

    // Select the active tab.
    Code.selected = clickedName;
    var selectedTab = document.getElementById('tab_' + clickedName);
    selectedTab.classList.remove('taboff');
    selectedTab.classList.add('tabon');
    // Show the selected pane.
    document.getElementById('content_' + clickedName).style.visibility = 'visible';
    if (clickedName === 'blocks' && Code.workspace) {
        Code.workspace.setVisible(false);
        Code.workspace.setVisible(true);
      }
    Code.renderContent();
    window.dispatchEvent(new Event('resize'));
    Blockly.svgResize(Code.workspace);
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Code.renderContent = function () {
    var content = document.getElementById('content_' + Code.selected);
    // Initialize the pane.
    if (content.id === 'content_arduino') {
        Code.attemptCodeGeneration(Blockly.Arduino, 'cpp');
    }
    if (typeof PR === 'object') {
        PR.prettyPrint();
    }
};

/**
 * Attempt to generate the code and display it in the UI, pretty printed.
 * @param generator {!Blockly.Generator} The generator to use.
 */
Code.attemptCodeGeneration = function (generator) {
    // var content = document.getElementById('content_' + Code.selected);
    var content = document.getElementById('content_code');
    content.textContent = '';
    if (Code.checkAllGeneratorFunctionsDefined(generator)) {
        var code = generator.workspaceToCode(Code.workspace);
        content.textContent = code;
        // Remove the 'prettyprinted' class, so that Prettify will recalculate.
        content.className = content.className.replace('prettyprinted', '');
    }
};

/**
 * Check whether all blocks in use have generator functions.
 * @param generator {!Blockly.Generator} The generator to use.
 */
Code.checkAllGeneratorFunctionsDefined = function (generator) {
    var blocks = Code.workspace.getAllBlocks(false);
    var missingBlockGenerators = [];
    for (var i = 0; i < blocks.length; i++) {
        var blockType = blocks[i].type;
        if (!generator[blockType]) {
            if (missingBlockGenerators.indexOf(blockType) === -1) {
                missingBlockGenerators.push(blockType);
            }
        }
    }

    var valid = missingBlockGenerators.length === 0;
    if (!valid) {
        var msg = 'The generator code for the following blocks not specified for ' +
                generator.name_ + ':\n - ' + missingBlockGenerators.join('\n - ');
        Blockly.alert(msg);  // Assuming synchronous. No callback.
    }
    return valid;
};

/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = function () {
    // board menu as  URL choice
    Code.setArduinoBoard();
    Code.initLanguage();
    setOnOffLine();
    var rtl = Code.isRtl();
    var container = document.getElementById('content_area');
    var onresize = function (e) {
        var bBox = Code.getBBox_(container);
        for (var i = 0; i < Code.TABS_.length; i++) {
            var el = document.getElementById('content_' + Code.TABS_[i]);
            el.style.top = bBox.y + 'px';
            el.style.left = bBox.x + 'px';
            // Height and width need to be set, read back, then set again to
            // compensate for scrollbars.
            el.style.height = bBox.height + 'px';
            el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
            el.style.width = bBox.width + 'px';
            el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
        }
        // Make the 'Blocks' tab line up with the toolbox.
        if (Code.workspace && Code.workspace.getToolbox().width) {
            document.getElementById('tab_blocks').style.minWidth =
                    (Code.workspace.getToolbox().width - 38) + 'px';
            // Account for the 19 pixel margin and on each side.
        }
    };
    window.addEventListener('resize', onresize, false);

    // The toolbox XML specifies each category name using Blockly's messaging
    // format (eg. `<category name="%{BKY_CATLOGIC}">`).
    // These message keys need to be defined in `Blockly.Msg` in order to
    // be decoded by the library. Therefore, we'll use the `MSG` dictionary that's
    // been defined for each language to import each category name message
    // into `Blockly.Msg`.
    for (var messageKey in MSG) {
        if (messageKey.indexOf('cat') === 0) {
            Blockly.Msg[messageKey.toUpperCase()] = MSG[messageKey];
        }
    }

    var match = location.search.match(/renderer=([^&]+)/);
    var renderer = match ? match[1] : 'geras';
    document.forms.options.elements.renderer.value = renderer;
    Code.workspace = Blockly.inject('content_blocks',
            {
                comments: true,
                collapse: true,
                disable: true,
                grid:
                        {
                            spacing: 25,
                            length: 3,
                            colour: '#ccc',
                            snap: true
                        },
                maxBlocks: Infinity,
                maxInstances: {'test_basic_limit_instances': 3},
                maxTrashcanContents: 256,
                media: './blockly/media/',
                oneBasedIndex: true,
                readOnly: false,
                rtl: rtl,
                move: {
                    scrollbars: true,
                    drag: true,
                    wheel: false
                },
                toolbox: BLOCKLY_TOOLBOX_XML['duinoToolbox'],
                renderer: renderer,
                zoom:
                        {
                            controls: true,
                            wheel: true,
                            startScale: 1.0,
                            maxScale: 4,
                            minScale: 0.25,
                            scaleSpeed: 1.1
                        }
            });
    Code.workspace.configureContextMenu = configureContextualMenu;

    Code.loadBlocks('');
	// Hook a save function onto unload.
	window.addEventListener('unload', auto_save_and_restore_blocks, false);
	if ('BlocklyStorage' in window) {
		BlocklyStorage.backupOnUnload(Code.workspace);
	}
    Code.tabClick(Code.selected);
    for (var i = 0; i < Code.TABS_.length; i++) {
        var name = Code.TABS_[i];
        Code.bindClick('tab_' + name,
                function (name_) {
                    return function () {
                        Code.tabClick(name_);
                    };
                }(name));
    }
    Code.bindClick('tab_code', function (e) {
        if (e.target !== document.getElementById('tab_code')) {
            // Prevent clicks on child codeMenu from triggering a tab click.
            return;
        }
    });

    onresize();
    Blockly.svgResize(Code.workspace);
    //change theme color
    match = location.search.match(/theme=([^&]+)/);
    var theme = match ? match[1] : 'classic';
    document.forms.options.elements.theme.value = theme;
    changeTheme(theme);

    // Lazy-load the syntax-highlighting.
    window.setTimeout(Code.importPrettify, 1);
    var actions = [
        Blockly.navigation.ACTION_PREVIOUS,
        Blockly.navigation.ACTION_OUT,
        Blockly.navigation.ACTION_NEXT,
        Blockly.navigation.ACTION_IN,
        Blockly.navigation.ACTION_INSERT,
        Blockly.navigation.ACTION_MARK,
        Blockly.navigation.ACTION_DISCONNECT,
        Blockly.navigation.ACTION_TOOLBOX,
        Blockly.navigation.ACTION_EXIT,
        Blockly.navigation.ACTION_MOVE_WS_CURSOR_UP,
        Blockly.navigation.ACTION_MOVE_WS_CURSOR_LEFT,
        Blockly.navigation.ACTION_MOVE_WS_CURSOR_DOWN,
        Blockly.navigation.ACTION_MOVE_WS_CURSOR_RIGHT
    ];
    createKeyMappingList(actions);
};

/**
 * Initialize the page language.
 */
Code.initLanguage = function () {
    // Set the HTML's language and direction.
    var rtl = Code.isRtl();
    document.dir = rtl ? 'rtl' : 'ltr';
    document.head.parentElement.setAttribute('lang', Code.LANG);

    // Sort languages alphabetically.
    var languages = [];
    for (var lang in Code.LANGUAGE_NAME) {
        languages.push([Code.LANGUAGE_NAME[lang], lang]);
    }
    var comp = function (a, b) {
        // Sort based on first argument ('English', 'Русский', '简体字', etc).
        if (a[0] > b[0])
            return 1;
        if (a[0] < b[0])
            return -1;
        return 0;
    };
    languages.sort(comp);
    // Populate the language selection menu.
    var languageMenu = document.getElementById('languageMenu');
    languageMenu.options.length = 0;
    for (var i = 0; i < languages.length; i++) {
        var tuple = languages[i];
        var lang = tuple[tuple.length - 1];
        var option = new Option(tuple[0], lang);
        if (lang === Code.LANG) {
            option.selected = true;
        }
        languageMenu.options.add(option);
    }
    languageMenu.addEventListener('change', Code.changeLanguage, true);

    // Populate the coding language selection menu.
    var codeMenu = document.getElementById('code_menu');
    codeMenu.options.length = 0;
    for (var i = 1; i < Code.TABS_.length; i++) {
        codeMenu.options.add(new Option(Code.TABS_DISPLAY_[i], Code.TABS_[i]));
    }
    codeMenu.addEventListener('change', Code.changeCodingLanguage);
    // Inject language strings.
    // document.title += ' ' + MSG['title'];
    // document.getElementById('title').textContent = MSG['title'];
    document.getElementById('tab_blocks').textContent = MSG['blocks'];
    //change Blockly title buttons by this one
    document.getElementById('languageSpan').textContent = MSG['languageSpan'];
    document.getElementById('themeSpan').textContent = MSG['themeSpan'];
    document.getElementById('renderSpan').textContent = MSG['renderSpan'];
    document.getElementById('boardIcon').title = MSG['boardSpan'];
    document.getElementById('boardMenu').title = MSG['boardSpan'];
    document.getElementById('serialIcon').title = MSG['serialSpan'];
    document.getElementById('serialMenu').title = MSG['serialSpan'];
    document.getElementById('undoButton').title = MSG['undoButton_span'];
    document.getElementById('redoButton').title = MSG['redoButton_span'];
    document.getElementById('verifyButton').title = MSG['verifyButton_span'];
    document.getElementById('uploadButton').title = MSG['uploadButton_span'];
    document.getElementById('serialConnectButton').title = MSG['serialConnectButton_span'];
    document.getElementById('viewCodeButton').title = MSG['viewCodeButton_span'];
    document.getElementById('saveCodeButton').title = MSG['saveCodeButton_span'];
    document.getElementById('newButton').title = MSG['newButton_span'];
    document.getElementById('saveXMLButton').title = MSG['saveXMLButton_span'];
    document.getElementById('loadXMLfakeButton').title = MSG['loadXMLfakeButton_span'];
    document.getElementById('resetButton').title = MSG['resetButton_span'];
    document.getElementById('setup_sideButton').title = MSG['setup_sideButton_span'];
    document.getElementById('helpButton').title = MSG['aboutHelpModalSpan'];
    document.getElementById('keyMappingModalSpan').textContent = MSG['keyMappingModalSpan'];
    document.getElementById('detailedCompilation_span').textContent = MSG['detailedCompilation_span'];

    Blockly.navigation.ACTION_PREVIOUS.name = MSG['actionName0'];
    Blockly.navigation.ACTION_OUT.name = MSG['actionName1'];
    Blockly.navigation.ACTION_NEXT.name = MSG['actionName2'];
    Blockly.navigation.ACTION_IN.name = MSG['actionName3'];
    Blockly.navigation.ACTION_INSERT.name = MSG['actionName4'];
    Blockly.navigation.ACTION_MARK.name = MSG['actionName5'];
    Blockly.navigation.ACTION_DISCONNECT.name = MSG['actionName6'];
    Blockly.navigation.ACTION_TOOLBOX.name = MSG['actionName7'];
    Blockly.navigation.ACTION_EXIT.name = MSG['actionName8'];
    Blockly.navigation.ACTION_MOVE_WS_CURSOR_UP.name = MSG['actionName9'];
    Blockly.navigation.ACTION_MOVE_WS_CURSOR_LEFT.name = MSG['actionName10'];
    Blockly.navigation.ACTION_MOVE_WS_CURSOR_DOWN.name = MSG['actionName11'];
    Blockly.navigation.ACTION_MOVE_WS_CURSOR_RIGHT.name = MSG['actionName12'];

    document.getElementById('accessibilitySpan').textContent = MSG['accessibilitySpan'];
    document.getElementById('defaultCursorSpan').textContent = MSG['defaultCursorSpan'];
    document.getElementById('basicCursorSpan').textContent = MSG['basicCursorSpan'];
    document.getElementById('lineCursorSpan').textContent = MSG['lineCursorSpan'];
    document.getElementById('keyMappingSpan').textContent = MSG['keyMappingSpan'];
    document.getElementById('themeClassicSpan').textContent = MSG['themeClassicSpan'];
    document.getElementById('themeModernSpan').textContent = MSG['themeModernSpan'];
    document.getElementById('themeDeuteranopiaSpan').textContent = MSG['themeDeuteranopiaSpan'];
    document.getElementById('themeTritanopiaSpan').textContent = MSG['themeTritanopiaSpan'];
    document.getElementById('themeZelosSpan').textContent = MSG['themeZelosSpan'];
    document.getElementById('themeHighContrastSpan').textContent = MSG['themeHighContrastSpan'];
    document.getElementById('themeDarkSpan').textContent = MSG['themeDarkSpan'];
    document.getElementById('themeBwSpan').textContent = MSG['themeBwSpan'];
    document.getElementById('fontSizeSpan').textContent = MSG['fontSizeSpan'];
    document.getElementById('optionFontSize').textContent = MSG['optionFontSize'];
    document.getElementById('keyMappingExplanationSpan').innerHTML = MSG['keyMappingExplanationSpan'];
};

/**
 * Discard all blocks from the workspace.
 */
Code.discard = function () {
    var count = Code.workspace.getAllBlocks(false).length;
    if (count < 2 ||
            window.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count))) {
        Code.workspace.clear();
        if (window.location.hash) {
            window.location.hash = '';
        }
    }
};

/**
 * Sets Arduino board
 */
Code.setArduinoBoard =  function () {
    var boardId = Code.getStringParamFromUrl('board', '');
    if (!boardId) {
        boardId = Code.selectedTabBoard;
    }
    document.getElementById('boardMenu').value = boardId;
    profile.default = profile[boardId];
};


// Load the Code demo's language strings.
document.write('<script src="./blockly/demos/code/msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="./blockly/msg/js/' + Code.LANG + '.js"></script>\n');

// Load BlocklyDuino's language strings.
document.write('<script src="./blocklyduino/msg/blocklyduino_' + Code.LANG + '.js"></script>\n');
document.write('<script src="./blocklyduino/msg/blocks_' + Code.LANG + '.js"></script>\n');
document.write('<script src="./blocklyduino/msg/categories_' + Code.LANG + '.js"></script>\n');

window.addEventListener('load', Code.init);