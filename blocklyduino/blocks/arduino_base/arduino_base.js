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
                .setCheck('Number');
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
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_delay'] = {
    init: function () {
        this.appendValueInput("DELAY_TIME", 'Number')
                .appendField(Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME)
                .setCheck('Number');
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
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL);
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_date'] = {
    init: function () {
        this.appendDummyInput()
                .appendField('date:')
                // according to docs, the field date adds 60% file size and might not be needed
                //.appendField(new Blockly.FieldDate(''), 'DATE');
                .appendField('DATE');
        this.setOutput(true, 'Number');
        this.setTooltip('Date entrie as yyyy-mm-dd');
        this.setHelpUrl('');
        this.setStyle('arduino_blocks');
    }
};

Blockly.Blocks['arduino_base_map'] = {
    init: function () {
        this.appendValueInput("NUM", 'Number')
                .appendField("Map ")
                .setCheck('Number');
        this.appendValueInput("DMAX", 'Number')
                .appendField("value to [0-")
                .setCheck('Number');
        this.appendDummyInput()
                .appendField("]");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Re-maps a number from [0-1024] to another.');
        this.setHelpUrl('https://www.arduino.cc/reference/en/language/functions/math/map/');
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
                .setCheck("Number");
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
                .appendField(Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL);
        this.setStyle('arduino_blocks');
    }
};
