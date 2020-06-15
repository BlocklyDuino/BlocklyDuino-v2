/*
 Copyright (C) 2020 Sebastien Canet <scanet@libreduc.cc>
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
 Created on : 30 janv. 2020, 18:00:25
 Author     : Sebastien Canet <scanet@libreduc.cc>
 */

'use strict';
var Code;

function setRenderDebugOptionCheckboxState(overrideOptions) {
    Code.blockRendering.Debug.config = overrideOptions || {};
    if (!overrideOptions) {
        return;
    }
    var renderDebugOptionsListEl = document.getElementById('renderDebugOptions');
    var renderDebugOptionInputs =
            renderDebugOptionsListEl.getElementsByTagName('input');
    for (var i = 0, optionInput;
            (optionInput = renderDebugOptionInputs[i]); i++) {
        var optionName = optionInput.getAttribute('data-optionName');
        optionInput.checked = !!overrideOptions[optionName];
    }
}

function updateRenderDebugOptions(e) {
    var target = e.target;
    var optionName = target.getAttribute('data-optionName');
    var config = Code.blockRendering.Debug.config;
    config[optionName] = !!target.checked;
    sessionStorage.setItem('blockRenderDebugOptions', JSON.stringify(config));
    Code.workspace.render();
}

function addRenderDebugOptionsCheckboxes() {
    var renderDebugConfig = Code.blockRendering.Debug.config;
    var renderDebugOptionsListEl = document.getElementById('renderDebugOptions');
    var optionNames = Object.keys(renderDebugConfig);
    for (var i = 0, optionName; (optionName = optionNames[i]); i++) {
        var optionCheckId = 'RenderDebug' + optionName + 'Check';
        var optionLabel = document.createElement('label');
        optionLabel.setAttribute('for', optionCheckId);
        optionLabel.textContent = optionName;
        var optionCheck = document.createElement('input');
        optionCheck.setAttribute('type', 'checkbox');
        optionCheck.setAttribute('id', optionCheckId);
        optionCheck.setAttribute('data-optionName', optionName);
        optionCheck.onclick = updateRenderDebugOptions;
        var optionLi = document.createElement('li');
        optionLi.appendChild(optionLabel);
        optionLi.appendChild(optionCheck);
        renderDebugOptionsListEl.appendChild(optionLi);
    }
}

function changeTheme(themeChoice) {
    if (themeChoice === "dark") {
        Blockly.getMainWorkspace().setTheme(Blockly.Themes.Dark);
    } else if (themeChoice === "high_contrast") {
        Blockly.getMainWorkspace().setTheme(Blockly.Themes.HighContrast);
    } else if (themeChoice === "deuteranopia") {
        Blockly.getMainWorkspace().setTheme(Blockly.Themes.Deuteranopia);
    } else if (themeChoice === "tritanopia") {
        Blockly.getMainWorkspace().setTheme(Blockly.Themes.Tritanopia);
    } else if (themeChoice === "modern") {
        Blockly.getMainWorkspace().setTheme(Blockly.Themes.Modern);
    } else if (themeChoice === "blackWhite") {
        Blockly.getMainWorkspace().setTheme(Blockly.Themes.blackWhite);
    } else if (themeChoice === "zelos") {
        Blockly.getMainWorkspace().setTheme(Blockly.Themes.Zelos);
    } else {
        Code.workspace.setTheme(Blockly.Themes.Classic);
    }
}
;

/**
 * Sort and list elements with class 'access' for size change
 */
function getElementsByClass(searchClass, node, tag) {
    var classElements = new Array();
    if (node === null)
        node = document;
    if (tag === null)
        tag = '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
    for (var i = 0, j = 0; i < elsLen; i++) {
        if (pattern.test(els[i].className)) {
            classElements[j] = els[i];
            j++;
        }
    }
    return classElements;
}
/**
 * Modify all element with 'class' at the 'size'
 */

function fontSizePageModify(classToModify, sizeToModify) {
    var target = getElementsByClass(classToModify);
    for (i = 0; i < target.length; i++) {
        target[i].style.fontSize = sizeToModify;
    }
}

/**
 * Modify all element with 'class' at the 'spacing'
 */
function fontSpacingPageModify(classToModify, spacingToModify) {
    var target = getElementsByClass(classToModify);
    for (i = 0; i < target.length; i++) {
        target[i].style.letterSpacing = spacingToModify;
    }
}

function setOnOffLine() {
    // Set background colour to differentiate server vs local copy.
    if (location.protocol === 'file:') {
        document.body.style.backgroundColor = '#006468';
        document.getElementById('CLI_content').style.backgroundColor = '#006468';
        document.getElementById('setup_content').style.backgroundColor = '#006468';
        document.getElementById('verifyButton').disabled = false;
        document.getElementById('serialButton').disabled = false;
        document.getElementById('uploadButton').disabled = false;
        document.getElementById('serialConnectButton').disabled = false;
        document.getElementById('serialMenu').disabled = false;
    } else {
        document.body.style.backgroundColor = '#7fcbcd';
        document.getElementById('CLI_content').style.backgroundColor = '#7fcbcd';
        document.getElementById('setup_content').style.backgroundColor = '#7fcbcd';
        document.getElementById('verifyButton').disabled = true;
        document.getElementById('serialButton').disabled = true;
        document.getElementById('uploadButton').disabled = true;
        document.getElementById('serialConnectButton').disabled = true;
        document.getElementById('serialMenu').disabled = true;
        // hide everything relative to arduino-cli if online
        var elmts = getElementsByClass("CLI", null, null);
        for (var i = 0; i < elmts.length; i++)
            elmts[i].disabled = true;
    }
}

function getToolboxElement() {
    var match = location.search.match(/toolbox=([^&]+)/);
    // Default to the basic toolbox with categories and untyped variables,
    // but override that if the toolbox type is set in the URL.
    var toolboxSuffix = (match ? match[1] : 'categories');
    // The three possible values are: "simple", "categories",
    // "categories-typed-variables".
    return document.getElementById('toolbox-' + toolboxSuffix);
}
;

function toggleAccessibilityMode(state) {
    if (state) {
        Blockly.navigation.enableKeyboardAccessibility();
    } else {
        Blockly.navigation.disableKeyboardAccessibility();
    }
}
;

function configureContextualMenu(menuOptions, e) {
    var screenshotOption = {
        text: MSG['screenshot'],
        enabled: Code.workspace.getTopBlocks().length,
        callback: function () {
            Blockly.downloadScreenshot(Code.workspace);
        }
    };
    menuOptions.push(screenshotOption);

    // Adds a default-sized workspace comment to the workspace.
    // menuOptions.push(Blockly.ContextMenu.workspaceCommentOption(Code.workspace, e));
}
;
