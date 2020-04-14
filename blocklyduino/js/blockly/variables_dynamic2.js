/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Utility functions for handling typed variables.
 *
 * @author duzc2dtw@gmail.com (Du Tian Wei)
 */
'use strict';

goog.provide('Blockly.VariablesDyn');

Blockly.VariablesDyn.onCreateVariableButtonClick_String = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      undefined, 'String');
};
Blockly.VariablesDyn.onCreateVariableButtonClick_Number = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      undefined, 'Number');
};
Blockly.VariablesDyn.onCreateVariableButtonClick_Boolean = function(button) {
  Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(),
      undefined, 'Boolean');
};
/**
 * Construct the elements (blocks and button) required by the flyout for the
 * variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML elements.
 */
Blockly.VariablesDyn.flyoutCategory = function(workspace) {
  var xmlList = [];
  var button = document.createElement('button');
  button.setAttribute('text', Blockly.Msg['NEW_STRING_VARIABLE']);
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_STRING');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', Blockly.Msg['NEW_NUMBER_VARIABLE']);
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_NUMBER');
  xmlList.push(button);
  button = document.createElement('button');
  button.setAttribute('text', 'Boolean');
  button.setAttribute('callbackKey', 'CREATE_VARIABLE_BOOLEAN');
  xmlList.push(button);

  workspace.registerButtonCallback('CREATE_VARIABLE_STRING',
      Blockly.VariablesDyn.onCreateVariableButtonClick_String);
  workspace.registerButtonCallback('CREATE_VARIABLE_NUMBER',
      Blockly.VariablesDyn.onCreateVariableButtonClick_Number);
  workspace.registerButtonCallback('CREATE_VARIABLE_BOOLEAN',
      Blockly.VariablesDyn.onCreateVariableButtonClick_Boolean);


  var blockList = Blockly.VariablesDyn.flyoutCategoryBlocks(workspace);
  xmlList = xmlList.concat(blockList);
  return xmlList;
};

/**
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.VariablesDyn.flyoutCategoryBlocks = function(workspace) {
  var variableModelList = workspace.getAllVariables();

  var xmlList = [];
  if (variableModelList.length > 0) {
    if (Blockly.Blocks['variables_set_dynamic']) {
      var firstVariable = variableModelList[variableModelList.length - 1];
      var block = Blockly.utils.xml.createElement('block');
      block.setAttribute('type', 'variables_set_dynamic');
      block.setAttribute('gap', 24);
      block.appendChild(
          Blockly.Variables.generateVariableFieldDom(firstVariable));
      xmlList.push(block);
    }
    if (Blockly.Blocks['variables_get_dynamic']) {
      variableModelList.sort(Blockly.VariableModel.compareByName);
      for (var i = 0, variable; (variable = variableModelList[i]); i++) {
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
