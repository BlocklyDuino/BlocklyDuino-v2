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
};
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
        var blob = new Blob([data], {type: 'text/plain;charset=utf-8'});
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
        var blob = new Blob([data], {type: 'text/xml;charset=utf-8'});
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
};

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
 * Hide/show the about panel.
 * @param {boolean} state
 * @package
 */
function toggleDisplayAbout(state) {
    if (state) {
        document.getElementById('aboutHelp').style.display = 'block';
        document.getElementById('aboutHelp').style.left = (top.innerWidth - document.getElementById('aboutHelp').offsetWidth) / 2 + "px";
        document.getElementById('aboutHelp').style.top = (top.innerHeight - document.getElementById('aboutHelp').offsetHeight) / 2 + "px";
    } else {
        document.getElementById('aboutHelp').style.display = 'none';
    }
};