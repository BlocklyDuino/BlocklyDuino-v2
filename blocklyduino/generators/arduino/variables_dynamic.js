'use strict';

goog.provide('Blockly.Arduino.VariablesTyped');

goog.require('Blockly.Arduino');

Blockly.Arduino['variables_set_typed'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_NONE) || '0';
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.Arduino['variables_get_typed'] = function(block) {
  // Variable getter.
  var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};