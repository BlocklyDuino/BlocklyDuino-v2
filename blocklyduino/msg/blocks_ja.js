'use strict';

goog.provide('Blockly.Msg.blocks_ja');

goog.require('Blockly.Msg');

Blockly.Msg.TITLE2 = " > web-based visual programming editor for arduino";

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["HIGH", "HIGH"], ["LOW", "LOW"]];

//blockly logic
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "ケースブロックに条件を追加";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "「もし」ブロックに終端条件を追加";
Blockly.Msg.CONTROLS_SWITCH_HELPURL = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg.CONTROLS_SWITCH_SWITCH_TOOLTIP = "「もし」ブロック再定義のために追加、削除、並べ替え";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "分岐 (";
Blockly.Msg.CONTROLS_SWITCH_VAR_TAIL = ")";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "デフォルト";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "ケース";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "分岐 (変数)";//"Switch (var)"
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "実行";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "もし値が真なら、構文を実行";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "もし値が真なら、最初のブロックを実行、そうでなければ2番目のブロックを実行";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "もし最初の値が真なら、最初のブロックを実行、そうでなければ、2番目の値が真なら、2番目のブロックを実行";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "もし最初の値が真なら、最初のブロックを実行、そうでなければ、2番目の値が真なら、2番目のブロックを実行 もし両方とも真でなければ、最後のブロックを実行";
Blockly.Msg.CONTROLS_SWITCH_VAR_TOOLTIP = "追加するために左からここにドラッグ";
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "ケース　ブレイク　実行を追加";//"Add additional case break do"
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP ="デフォルトのアクションを追加";//"Add optional default action"
//Arduino base cateory blocks
Blockly.Msg.VAR_CREATE_INT = "integer";
Blockly.Msg.VAR_CREATE_FLOAT = "float";
Blockly.Msg.VAR_CREATE_STRING = "string";
Blockly.Msg.VAR_CREATE_BOOLEAN = "boolean";
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
Blockly.Msg.ARDUINO_BASE_MAP1 = "map";
Blockly.Msg.ARDUINO_BASE_MAP2 = "value to [0-";
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "Re-maps a number from [0-1024] to another."
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "サウンド出力　ピン：";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "周波数 (Hz)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "ピンにサウンドを出力します";//"emits sound on the selected pin";
Blockly.Msg.ARDUINO_TONE_HELPURL = "https://www.arduino.cc/reference/jp/language/functions/advanced-io/tone/";//"http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "サウンド出力終了　ピン：";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "サウンドをミュートします";//"mutes the sound on the selected pin";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "https://www.arduino.cc/reference/jp/language/functions/advanced-io/notone/";//"http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "シリアルでデータを送る　ポート:";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "データを送信してモニターで監視します";//"sends data over the serial port for sruvaillance by the monitor in ASCII";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";
