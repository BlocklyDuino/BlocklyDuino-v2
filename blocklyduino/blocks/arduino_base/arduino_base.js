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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Constants.arduino_base');

goog.require('Blockly.Blocks');
goog.require('Blockly');

var mediaFolder = "./blocklyduino/media/";

Blockly.Blocks['arduino_base_inout_buildin_led'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL);
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_inout_digital_write'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(new Blockly.FieldImage(mediaFolder + "digital.jpg", 64, 64))
                .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN")
                .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2)
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_inout_digital_read'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_inout_highlow'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'BOOL')
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_inout_analog_write'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(new Blockly.FieldImage(mediaFolder + "pwm.png", 64, 64))
                .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownPWM), "PIN");
        this.appendValueInput("PWM", 'Number')
                .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_inout_analog_read'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownAnalog), "PIN");
        this.setOutput(true, 'int');
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_delay'] = {
    init: function () {
        this.appendValueInput("DELAY_TIME", 'Number')
                .appendField(Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_angle'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_BASE_ANGLE)
                .appendField(new Blockly.FieldAngle(90), 'ANGLE');
        this.setOutput(true, intCompatibility);
        this.setTooltip(Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_map'] = {
    init: function () {
        this.appendValueInput("NUM", 'Number')
                .appendField(Blockly.Msg.ARDUINO_BASE_MAP1)
                .setCheck(intCompatibility);
        this.appendValueInput("DMAX", 'Number')
                .appendField(Blockly.Msg.ARDUINO_BASE_MAP2)
                .setCheck(intCompatibility);
        this.appendDummyInput()
                .appendField("]");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_MAP_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_inout_tone'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_TONE_INPUT1)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
        this.appendValueInput("NUM", "Number")
                .appendField(Blockly.Msg.ARDUINO_TONE_INPUT2)
                .setCheck(intCompatibility);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_TONE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_TONE_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_inout_notone'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.ARDUINO_NOTONE_INPUT)
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_NOTONE_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_serial_print'] = {
    init: function () {
        this.appendValueInput("CONTENT", 'String')
                .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT)
                .setCheck(stringCompatibility);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
        this.setStyle('arduino_blocks');
    }
};
