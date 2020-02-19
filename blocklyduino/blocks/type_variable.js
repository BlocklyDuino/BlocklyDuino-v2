/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 * @fileoverview typing variable for Arduino blocks.
 * @author scanet@libreduc.cc (Sébastien Canet)
 */
'use strict';

goog.provide('Blockly.VariablesDynamicTyping');

goog.require('Blockly.Variables');
goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');
goog.require('Blockly.utils.xml');
goog.require('Blockly.VariableModel');

Blockly.VariablesDynamicTyping.onCreateVariableButtonClick_Integer = function (button) {
    Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
            null, 'Integer');
};
Blockly.VariablesDynamicTyping.onCreateVariableButtonClick_Float = function (button) {
    Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
            null, 'Float');
};
Blockly.VariablesDynamicTyping.onCreateVariableButtonClick_Boolean = function (button) {
    Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
            null, 'Boolean');
};
/**
 * Construct the elements (blocks and button) required by the flyout for the
 * variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML elements.
 */
Blockly.VariablesDynamicTyping.flyoutCategory = function (workspace) {
    var xmlList = [];
    var button = document.createElement('button');
    button.setAttribute('text', Blockly.Msg['Integer']);
    button.setAttribute('callbackKey', 'CREATE_VARIABLE_INTEGER');
    xmlList.push(button);
    button = document.createElement('button');
    button.setAttribute('text', Blockly.Msg['Float']);
    button.setAttribute('callbackKey', 'CREATE_VARIABLE_FLOAT');
    xmlList.push(button);
    button = document.createElement('button');
    button.setAttribute('text', Blockly.Msg['Boolean']);
    button.setAttribute('callbackKey', 'CREATE_VARIABLE_BOOLEAN');
    xmlList.push(button);

    workspace.registerButtonCallback('CREATE_VARIABLE_INTEGER',
            Blockly.VariablesDynamicTyping.onCreateVariableButtonClick_Integer);
    workspace.registerButtonCallback('CREATE_VARIABLE_FLOAT',
            Blockly.VariablesDynamicTyping.onCreateVariableButtonClick_Float);
    workspace.registerButtonCallback('CREATE_VARIABLE_BOOLEAN',
            Blockly.VariablesDynamicTyping.onCreateVariableButtonClick_Boolean);

    var blockList = Blockly.VariablesDynamic.flyoutCategoryBlocks(workspace);
    xmlList = xmlList.concat(blockList);
    return xmlList;
};

/**
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.VariablesDynamicTyping.flyoutCategoryBlocks = function (workspace) {
    var variableModelList = workspace.getAllVariables();

    var xmlList = [];
    if (variableModelList.length > 0) {
        if (Blockly.Blocks['vars_set']) {
            var firstVariable = variableModelList[variableModelList.length - 1];
            var block = Blockly.utils.xml.createElement('block');
            block.setAttribute('type', 'variables_set_dynamic');
            block.setAttribute('gap', 24);
            block.appendChild(
                    Blockly.Variables.generateVariableFieldDom(firstVariable));
            xmlList.push(block);
        }
        if (Blockly.Blocks['vars_get']) {
            variableModelList.sort(Blockly.VariableModel.compareByName);
            for (var i = 0, variable; variable = variableModelList[i]; i++) {
                var block = Blockly.utils.xml.createElement('block');
                block.setAttribute('type', 'variables_get_dynamic');
                block.setAttribute('gap', 8);
                block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                xmlList.push(block);
            }
        }
    }
    return xmlList;
};

var createVarBtnCallBack = function (button) {
    Blockly.Dynamic.createVariableButtonHandler(
            button.getTargetWorkspace(), null, 'strategyVar');
};
Blockly.Blocks['vars_get'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(new Blockly.FieldVariable("", null, ['strategyVar'], 'strategyVar'), "VAR_GET");
        this.setOutput(true, "strategyVar");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['vars_set'] = {
    init: function () {
        this.appendValueInput("VALUE")
                .appendField("set")
                .appendField(new Blockly.FieldVariable("", null, ['strategyVar'], 'strategyVar'), "VAR_SET")
                .appendField("to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Variables.createVariable(button.getTargetWorkspace(), null, 'strategyVar');

Blockly.Variables.createVariable(button.getTargetWorkspace(), null, 'Integer');
Blockly.Variables.createVariable(button.getTargetWorkspace(), null, 'Float');
Blockly.Variables.createVariable(button.getTargetWorkspace(), null, 'Boolean');

var strategyVariablesCallBack = function (currWorkspace) {
    var allStrategyVars = BlocklyDuino.workspace.getVariablesOfType('strategyVar');
    console.log(allStrategyVars);
    var xmlList = [];
    var createVarBtnXml = Blockly.Xml.textToDom('<xml>' +
            '<button text="Create Strategy Variable" callbackKey="createVarBtn">' +
            '</button>' +
            '</xml>').firstChild;
    xmlList.push(createVarBtnXml);
    if (allStrategyVars.length > 0) {
        if (Blockly.Blocks['vars_set']) {
            var firstVariable = allStrategyVars[allStrategyVars.length - 1];
            var gap = 24;
            var blockText = '<xml>' +
                    '<block type="vars_set" gap="' + gap + '">' +
                    // This line is changed.
                    '<field name="VAR_SET" variabletype="strategyVar">' +
                    firstVariable.name +
                    '</field>' +
                    '</block>' +
                    '</xml>';
            var block = Blockly.Xml.textToDom(blockText).firstChild;
            xmlList.push(block);
        }
        if (Blockly.Blocks['vars_get']) {
            allStrategyVars.sort(Blockly.VariableModel.compareByType);
            for (var i = 0, variable; variable = allStrategyVars[i]; i++) {
                var blockText = '<xml>' +
                        '<block type="vars_get" gap="8">' +
                        // This line is changed.
                        '<field name="VAR_GET" variabletype="strategyVar">' +
                        variable.name +
                        '</field>' +
                        '</block>' +
                        '</xml>';
                var block = Blockly.Xml.textToDom(blockText).firstChild;
                xmlList.push(block);
            }
        }
    }
    return xmlList;
};

var createVarBtnCallBack = function (button) {
    Blockly.Dynamic.createVariable(button.getTargetWorkspace(), null, 'strategyVar');
};

Blockly.workspace.registerButtonCallback('createVarBtn', createVarBtnCallBack);
Blockly.workspace.registerToolboxCategoryCallback('VARIABLE_DYNAMIC_TYPES', strategyVariablesCallBack);