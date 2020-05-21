'use strict';

goog.provide('Blockly.Msg.blocks_es');

goog.require('Blockly.Msg');

Blockly.Msg.TITLE2 = " > Programación visual de bloques para Arduino";

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["1 (activado)", "HIGH"], ["0 (desactivado)", "LOW"]];

//blockly logic
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Add a condition to the case block.";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Add a final, catch-all condition to the if block.";
Blockly.Msg.CONTROLS_SWITCH_HELPURL = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg.CONTROLS_SWITCH_SWITCH_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "Cambiar (";
Blockly.Msg.CONTROLS_SWITCH_VAR_TAIL = ")";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "estándar";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "caso";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "Cambiar (var)";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "hacer";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "If a value is true, then do some statements.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TOOLTIP = "Drag from the left into here to add";
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Add additional case break do";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Add optional default action";
//Arduino base cateory blocks
Blockly.Msg.VAR_CREATE_INT = "integer";
Blockly.Msg.VAR_CREATE_FLOAT = "float";
Blockly.Msg.VAR_CREATE_STRING = "string";
Blockly.Msg.VAR_CREATE_BOOLEAN = "boolean";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "pon el LED en el estado lógico";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "para o enciende el LED en la placa Arduino";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "pon el pin digital";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "en el estado lógico";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "escribe un valor (0 o 1) en el pin escogido en la salida";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "el estado lógico del pin nº";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "lee el valor (0 o 1) en el pin escogido en la entrada";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "escribe en el pin analógico ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "el valor";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "escribe un valor (comprendido entre 0 y 255) en el pin analógico.\nATENCIÓN: Verifica que el pin sea PWM~ !";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "el valor leído en el pin de entrada analógica";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "lee el valor (comprendido entre 0 y 1023) en los pines analógicos.\nATENCIÓN: Verifica que el pin sea A# (ejemplo : A0,A1,...) ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "haz una temporización (en ms) de";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "especifica el tiempo de espera, para la ejecución del programa el tiempo indicado";
Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_ANGLE = "ángulo de ";
Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP = "envía un valor entre 0~180°";
Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL = "";
Blockly.Msg.ARDUINO_BASE_MAP1 = "map";
Blockly.Msg.ARDUINO_BASE_MAP2 = "value to [0-";
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "Re-maps a number from [0-1024] to another."
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emite un sonido en el pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "de una frecuencia (Hz)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emite un sonido en el pin seleccionado";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "para el sonido en el pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "para el sonido en el pin seleccionado";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "envía el texto al puerto serie:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "envía datos al puerto serie para vigilancia con el monitor ASCII";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";
