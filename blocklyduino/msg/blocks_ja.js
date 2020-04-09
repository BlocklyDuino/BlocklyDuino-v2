'use strict';

goog.provide('Blockly.Msg.blocks_ja');

goog.require('Blockly.Msg');

Blockly.Msg.TITLE2 = " > web-based visual programming editor for arduino";

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["HIGH", "HIGH"], ["LOW", "LOW"]];

//Arduino base cateory blocks
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "LEDを設定";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Arduinoボード上のLEDをオンオフします"; //"off or turn on the LED on the Arduino board";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "デジタルピン";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "を設定";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "出力ピンに0か1を出力します";//"write a 0 or 1 state numeric on a specific output";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "デジタルピンの値を読む";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "デジタルピンの状態0か1を読みます";//"reading the digital state 0 or 1 of the digital pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "アナログピンに書き込む";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "値";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "０～255の値を出力します";//"send a value between 0 and 255 on a specific output";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "https://www.arduino.cc/reference/jp/language/functions/analog-io/analogwrite/";//"http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "アナログ入力読み込み";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "0～1023の値を返します";//"returns a value between 0 and 1023";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "https://www.arduino.cc/reference/jp/language/functions/analog-io/analogread/";//"http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "待つ (ミリ秒)";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "停止時間をミリ秒で指定します";//"specify the pause time in milliseconds";
Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_ANGLE = "角度：";//"angle:";
Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP = "0~180°の角度";//"angle value between 0~180°";
Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL = "";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "サウンド出力　ピン：";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "周波数 (Hz)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "ピンにサウンドを出力します";//"emits sound on the selected pin";
Blockly.Msg.ARDUINO_TONE_HELPURL = "https://www.arduino.cc/reference/jp/language/functions/advanced-io/tone/";//"http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "サウンド出力終了　ピン：";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "サウンドをミュートします";//"mutes the sound on the selected pin";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "https://www.arduino.cc/reference/jp/language/functions/advanced-io/notone/";//"http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "シリアルでデータを送る　ポート:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "sends data over the serial port for sruvaillance by the monitor in ASCII";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";
