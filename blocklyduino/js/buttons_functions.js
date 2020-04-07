/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview Helper functions for generating Arduino for blocks.
 * @author scanet@libreduc.cc (SebCanet)
 */

/*
 * auto save and restore blocks
 */
function auto_save_and_restore_blocks() {
    // Store the blocks for the duration of the reload.
    // MSIE 11 does not support sessionStorage on file:// URLs.
    if (window.sessionStorage) {
        var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
        var text = Blockly.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }
}
;
/**
 * Undo/redo functions
 */
Code.Undo = function () {
    Blockly.getMainWorkspace().undo(0);
};
Code.Redo = function () {
    Blockly.getMainWorkspace().undo(1);
};

/**
 * Creates an INO file containing the Arduino code from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
Code.saveArduinoFile = function () {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '_');
    var fileName = window.prompt('What would you like to name your file?', "arduino_" + utc);
    var data = Blockly.Arduino.workspaceToCode(Blockly.getMainWorkspace());
    if (fileName) {
        var blob = new Blob([data], {
            type: 'text/plain;charset=utf-8'
        });
        saveAs(blob, fileName + ".ino");
    }
};

/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
Code.saveXmlBlocklyFile = function () {
    var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var data = Blockly.Xml.domToPrettyText(xml);
    var fileName = window.prompt('What would you like to name your file?', 'Blockly');
    if (fileName) {
        var blob = new Blob([data], {
            type: 'text/xml;charset=utf-8'
        });
        saveAs(blob, fileName + ".bduino");
    }
};

/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
Code.openXmlDialog = function () {
    document.getElementById('loadXMLfile').click();
};

/**
 * Load blocks from local file.
 */
function loadXmlBlocklyFile(files) {
    // Only allow uploading one file
    if (files.length != 1) {
        return;
    }

    // FileReader
    var reader = new FileReader();
    reader.onloadend = function (event) {
        var target = event.target;
        // 2 == FileReader.DONE
        if (target.readyState === 2) {
            try {
                var xml = Blockly.Xml.textToDom(target.result);
            } catch (e) {
                alert('Error parsing XML:\n' + e);
                return;
            }
            var count = Blockly.getMainWorkspace().getAllBlocks().length;
            if (count && confirm('Replace existing blocks?\n"Cancel" will merge.')) {
                Blockly.getMainWorkspace().clear();
            }
            Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
        }
        // Reset value of input after loading because Chrome will not fire
        // a 'change' event if the same file is loaded again.
        document.getElementById('loadXMLfile').value = '';
    };
    reader.readAsText(files[0]);
    Blockly.getMainWorkspace().render();
}
;

/**
 * Reset workspace and parameters
 */
Code.ResetWorkspace = function () {
    var count = Blockly.mainWorkspace.getAllBlocks(false).length;
    if (window.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count))) {
        Blockly.Events.disable();
        Blockly.getMainWorkspace().clear();
        Blockly.getMainWorkspace().trashcan.contents_ = [];
        Blockly.getMainWorkspace().trashcan.setOpen('false');
        window.removeEventListener('unload', auto_save_and_restore_blocks, false);
        localStorage.clear();
        sessionStorage.clear();
        Code.renderContent();
        Blockly.Events.enable();
    }
    if (window.location.hash) {
        window.location.hash = '';
    }
    window.location = window.location.protocol + '//' + window.location.host + window.location.pathname;
};

/**
 * Change font size in blocks in all workspace
 */
Code.changeRenderingConstant = function (value) {
    var type = document.getElementById('rendering-constant-selector').value;
    if (type === 'fontSize') {
        var fontStyle = {
            'size': value
        };
        Blockly.getMainWorkspace().getTheme().setFontStyle(fontStyle);
    }
    // Refresh theme.
    Blockly.getMainWorkspace().setTheme(Blockly.getMainWorkspace().getTheme());
};

/**
 * Store the state the code sidebar visibility
 * @private
 */
Code.peekCode_ = true;
Code.peekSetup_ = true;
Code.peekCLI_ = true;

/**
 * Loads/unloads the side div with a code peek
 * @param {boolean} visible Optional argument, indicates the new visibility of
 *                           the code preview.
 */
Code.peekCode = function (visible) {
    var peekCodeButton = document.getElementById('viewCodeButton');
    //needed to set a value because 'visible' can be undefined
    if (visible === true) {
        Code.peekCode_ = true;
    } else if (visible === false) {
        Code.peekCode_ = false;
    }
    if (Code.peekCode_ === true) {
        peekCodeButton.className = 'iconButtonsClicked';
        //hide peek setup & cli if opened
        Code.peekSetup(false);
        Code.peekCLI(false);
        
        Code.sideCode(true);
        Code.peekCode_ = false;
        document.getElementById('setup_sideButton').className = 'iconButtons';
        document.getElementById('setup_content').style.display = 'none';
        document.getElementById('config_sideButton').className = 'iconButtons';
        document.getElementById('CLI_content').style.display = 'none';
        // Regenerate code
        Code.renderArduinoPeekCode();
        Code.workspace.addChangeListener(Code.renderArduinoPeekCode);
    } else {
        Code.workspace.removeChangeListener(Code.renderArduinoPeekCode);
        peekCodeButton.className = 'iconButtons';
        Code.sideCode(false);
        Code.peekCode_ = true;
    }
};

/**
 * Configure the Block panel to display code on the right
 * @param {boolean} visible Indicate if the content should be shown or hidden.
 */
Code.sideCode = function (visible) {
    var oldSelectedTab = Code.selected;
    // Deselect all tabs and hide all panes.
    for (var i = 0; i < Code.TABS_.length; i++) {
        var name = Code.TABS_[i];
        document.getElementById('tab_' + name).className = 'taboff';
        document.getElementById('content_' + name).style.visibility = 'hidden';
    }
    if (visible === true) {
        //side code opened, block shown and code tab closed
        document.getElementById('tab_blocks').className = 'tabon';
        document.getElementById('content_blocks').style.visibility = 'visible';
        document.getElementById('content_blocks').className = 'content content_blocks_side';
        document.getElementById('side_content').style.display = 'block';
        document.getElementById('arduino_code_peek').style.display = 'block';
    } else {
        document.getElementById('tab_' + oldSelectedTab).className = 'tabon';
        document.getElementById('content_' + oldSelectedTab).style.visibility = 'visible';
        document.getElementById('content_blocks').className = 'content content_blocks';
        document.getElementById('arduino_code_peek').style.display = 'none';
        document.getElementById('side_content').style.display = 'none';
    }
    window.dispatchEvent(new Event('resize'));
    Code.renderContent();
};

/**
 * Private variable to save the previous version of the Arduino Code.
 * @author: Carlos Sperate
 * @type {!String}
 * @private
 */
Code.PREV_CODE_ = 'void setup() {\n\n}\n\n\nvoid loop() {\n\n}';


/** Updates the Arduino code in the side content. */
Code.renderArduinoPeekCode = function () {
    var codePeakPre = document.getElementById('arduino_code_peek_content');
    codePeakPre.textContent = Blockly.Arduino.workspaceToCode(Code.workspace);
    if (typeof prettyPrintOne == 'function') {
        codePeakPre.innerHTML = prettyPrintOne(codePeakPre.innerHTML, 'cpp');
    }
    // var generatedCode = Blockly.Arduino.workspaceToCode(Code.workspace);
    // if (generatedCode !== Code.PREV_CODE_) {
        // var diff = JsDiff.diffWords(Code.PREV_CODE_, generatedCode);
        // var resultStringArray = [];
        // for (var i = 0; i < diff.length; i++) {
            // if (!diff[i].removed) {
                // var escapedCode = diff[i].value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                // if (diff[i].added) {
                    // resultStringArray.push('<span class="code_arduino_new">' + escapedCode + '</span>');
                // } else {
                    // resultStringArray.push(escapedCode);
                // }
            // }
        // }
        // document.getElementById('arduino_code_peek_content').innerHTML = prettyPrintOne(resultStringArray.join(''), 'cpp', false);
        // Code.PREV_CODE_ = generatedCode;
    // }
};

/**
 * Loads/unloads the side div with setup
 * @param {boolean} visible Optional argument, indicates the new visibility
 */
Code.peekSetup = function (visible) {
    var peekSetupButton = document.getElementById('setup_sideButton');
    //needed to set a value because 'visible' can be undefined
    if (visible === true) {
        Code.peekSetup_ = true;
    } else if (visible === false) {
        Code.peekSetup_ = false;
    }
    if (Code.peekSetup_ === true) {
        peekSetupButton.className = 'iconButtonsClicked';
        //hide peek code & cli if opened
        Code.peekCode(false);
        Code.peekCLI(false);
        
        Code.sideSetup(true);
        Code.peekSetup_ = false;
        document.getElementById('viewCodeButton').className = 'iconButtons';
        document.getElementById('side_content').style.display = 'none';
        document.getElementById('config_sideButton').className = 'iconButtons';
        document.getElementById('CLI_content').style.display = 'none';
    } else {
        peekSetupButton.className = 'iconButtons';
        Code.sideSetup(false);
        Code.peekSetup_ = true;
    }
};

/**
 * Configure the Block panel to display setup on the right
 * @param {boolean} visible Indicate if the content should be shown or hidden.
 */
Code.sideSetup = function (visible) {
    var oldSelectedTab = Code.selected;
    // Deselect all tabs and hide all panes.
    for (var i = 0; i < Code.TABS_.length; i++) {
        var name = Code.TABS_[i];
        document.getElementById('tab_' + name).className = 'taboff';
        document.getElementById('content_' + name).style.visibility = 'hidden';
    }
    if (visible === true) {
        document.getElementById('tab_blocks').className = 'tabon';
        document.getElementById('content_blocks').style.visibility = 'visible';
        document.getElementById('content_blocks').className = 'content content_blocks_side';
        document.getElementById('setup_content').style.display = 'block';
    } else {
        document.getElementById('tab_' + oldSelectedTab).className = 'tabon';
        document.getElementById('content_' + oldSelectedTab).style.visibility = 'visible';
        document.getElementById('content_blocks').className = 'content content_blocks';
        document.getElementById('setup_content').style.display = 'none';
    }
    window.dispatchEvent(new Event('resize'));
};

/**
 * Loads/unloads the side div with a code peek
 * @param {boolean} visible Optional argument, indicates the new visibility of
 *                           the code preview.
 */
Code.peekCLI = function (visible) {
    var peekCLIButton = document.getElementById('config_sideButton');
    //needed to set a value because 'visible' can be undefined
    if (visible === true) {
        Code.peekCLI_ = true;
    } else if (visible === false) {
        Code.peekCLI_ = false;
    }
    if (Code.peekCLI_ === true) {
        peekCLIButton.className = 'iconButtonsClicked';
        //hide peek code & setup if opened
        Code.peekCode(false);
        Code.peekSetup(false);
        
        Code.sideCLI(true);
        Code.peekCLI_ = false;
        document.getElementById('viewCodeButton').className = 'iconButtons';
        document.getElementById('side_content').style.display = 'none';
        document.getElementById('setup_sideButton').className = 'iconButtons';
        document.getElementById('setup_content').style.display = 'none';
        // Regenerate code
        Code.attemptCodeGeneration(Blockly.Arduino, 'cpp');
    } else {
        peekCLIButton.className = 'iconButtons';
        Code.sideCLI(false);
        Code.peekCLI_ = true;
    }
};

/**
 * Configure the Block panel to display setup on the right
 * @param {boolean} visible Indicate if the content should be shown or hidden.
 */
Code.sideCLI = function (visible) {
    var oldSelectedTab = Code.selected;
    // Deselect all tabs and hide all panes.
    for (var i = 0; i < Code.TABS_.length; i++) {
        var name = Code.TABS_[i];
        document.getElementById('tab_' + name).className = 'taboff';
        document.getElementById('content_' + name).style.visibility = 'hidden';
    }
    if (visible === true) {
        document.getElementById('tab_arduino').className = 'tabon';
        document.getElementById('content_arduino').style.visibility = 'visible';
        document.getElementById('content_arduino').className = 'content content_blocks_side';
        document.getElementById('CLI_content').style.display = 'block';
    } else {
        document.getElementById('tab_' + oldSelectedTab).className = 'tabon';
        document.getElementById('content_' + oldSelectedTab).style.visibility = 'visible';
        document.getElementById('content_arduino').className = 'content content_blocks';
        document.getElementById('CLI_content').style.display = 'none';
    }
    window.dispatchEvent(new Event('resize'));
};