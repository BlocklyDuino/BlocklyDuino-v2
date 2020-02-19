'use strict';

goog.provide('Blockly.Msg.blocks_ja');

goog.require('Blockly.Msg');

Blockly.Msg.TITLE2 = " > web-based visual programming editor for arduino";

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["HIGH", "HIGH"], ["LOW", "LOW"]];

//Arduino base cateory blocks
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "LEDを設定";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "off or turn on the LED on the Arduino board";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "デジタルピン";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "を設定";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "write a 0 or 1 state numeric on a specific output";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "デジタルピンの値を読む";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "reading the digital state 0 or 1 of the digital pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "アナログピンに書き込む";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "値";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "send a value between 0 and 255 on a specific output";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "アナログ入力読み込み";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "returns a value between 0 and 1023";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "待つ (ミリ秒)";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "specify the pause time in milliseconds";
Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_ANGLE = "angle:";
Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP = "angle value between 0~180°";
Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL = "";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "サウンド出力　ピン：";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "周波数 (Hz)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emits sound on the selected pin";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "サウンド出力終了　ピン：";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "mutes the sound on the selected pin";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "シリアルでデータを送る　ポート:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "sends data over the serial port for sruvaillance by the monitor in ASCII";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";