'use strict';

goog.provide('Blockly.Msg.blocks_ca');

goog.require('Blockly.Msg');

Blockly.Msg.TITLE2 = " > Programació visual de blocs per a Arduino";

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["1 (activat)", "HIGH"], ["0 (desactivat)", "LOW"]];

//Arduino base cateory blocks
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "posa el LED a l'estat lògic";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "atura o engega el LED a la placa Arduino";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "posa el pin digital";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "a l'estat lògic";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "escriu un valor (0 ou 1) al pin triat a la sortida";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "l'estat lògic del pin nº";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "llegeix el valor (0 o 1) al pin triat a l'entrada";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "escriu al pin analògic ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "el valor";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "escriu un valor (comprés entre 0 i 255) al pin analògic.\nATENCIÓ: Verifiqueu que el pin sigui PWM~ !";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "el valor llegit al pin d'entrada analògica";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "llegeix el valor (comprés entre 0 i 1023) al pin analògics.\nATENCIÓ: Verifiqueu que el pin sigui A# (exemple : A0,A1,...) ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "fes una temporització (en ms) de";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "especifica el temps d'espera, atura l'execució del programa el temps indicat";
Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_ANGLE = "angle de ";
Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP = "reenvia un valor entre 0~180°";
Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL = "";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emet un só al pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "d'una freqüència (Hz)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emet un só al pin seleccionat";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "atura el só al pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "atura el só al pin seleccionat";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "envia el text al port sèrie:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "envia dades al port sèrie per a vigilancia amb el monitor ASCII";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";
