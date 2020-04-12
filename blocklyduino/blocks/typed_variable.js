'use strict';

goog.provide('Blockly.Constants.variablesDyn');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['vars_set_int'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("", null, ['varInt'], 'varInt'), "VAR_SET_INT")
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vars_get_int'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("", null, ['varInt'], 'varInt'), "VAR_GET_INT");
    this.setOutput(true, "varInt");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vars_set_float'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("", null, ['varFloat'], 'varFloat'), "VAR_SET_FLOAT")
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vars_get_float'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("", null, ['varFloat'], 'varFloat'), "VAR_GET_FLOAT");
    this.setOutput(true, "varFloat");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vars_set_string'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .appendField("set")
        .appendField(new Blockly.FieldVariable("", null, ['varString'], 'varString'), "VAR_SET_STRING")
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['vars_get_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("", null, ['varString'], 'varString'), "VAR_GET_STRING");
    this.setOutput(true, "varString");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};