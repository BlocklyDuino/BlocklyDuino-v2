/**
 * @license
 * Copyright 2020 Carles Ferrando Garcia (ferrando_cariga@gva.es)
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

goog.provide('Blockly.Msg.blocks_es');

goog.require('Blockly.Msg');

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["1 (activado)", "HIGH"], ["0 (desactivado)", "LOW"]];

//blockly logic
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Agregar una condición al bloque de casos.";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Agregue una condición final, general al bloque if.";
Blockly.Msg.CONTROLS_SWITCH_HELPURL = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg.CONTROLS_SWITCH_SWITCH_TOOLTIP = "Agregue, elimine o reordene secciones para reconfigurar esto si bloquea.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "Cambiar (";
Blockly.Msg.CONTROLS_SWITCH_VAR_TAIL = ")";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "estándar";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "caso";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "Cambiar (var)";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "hacer";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "Si un valor es verdadero, entonces haga algunas declaraciones.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "Si un valor es verdadero, entonces haga el primer bloque de declaraciones. De lo contrario, haga el segundo bloque de declaraciones.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "Si el primer valor es verdadero, entonces haga el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, haga el segundo bloque de declaraciones.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "Si el primer valor es verdadero, entonces haga el primer bloque de declaraciones. De lo contrario, si el segundo valor es verdadero, realice el segundo bloque de declaraciones. Si ninguno de los valores es verdadero, realice el último bloque de declaraciones.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TOOLTIP = "Arrastre desde la izquierda hacia aquí para agregar";
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Agregar un caso adicional";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Agregar acción predeterminada opcional";
//Arduino base cateory blocks
Blockly.Msg.VAR_CREATE_INT = "entero";
Blockly.Msg.VAR_CREATE_FLOAT = "floatante";
Blockly.Msg.VAR_CREATE_STRING = "cadena";
Blockly.Msg.VAR_CREATE_BOOLEAN = "booleano";
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
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "Re-mapea un número de [0-1024] a otro."
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emite un sonido en el pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "de una frecuencia (Hz)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emite un sonido en el pin seleccionado";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "para el sonido en el pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "para el sonido en el pin seleccionado";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";

//SERIAL
Blockly.Msg.SERIAL_INIT = "Velocidad de inicio de comunicación serial";
Blockly.Msg.SERIAL_PRINT_FORMAT = "Formato de impresión";
Blockly.Msg.SERIAL_PRINT_FORDECIMAL = "decimal";
Blockly.Msg.SERIAL_PRINT_FORHEXA = "hexadecimal";
Blockly.Msg.SERIAL_PRINT_FORBIN = "binario";
Blockly.Msg.SERIAL_PRINT_FOROCT = "octal";
Blockly.Msg.SERIAL_READ = "Leer serial";
Blockly.Msg.SERIAL_AVAILABLE = "Serial disponible?";
Blockly.Msg.SERIAL_FLUSH = "Lavado del serial";
Blockly.Msg.SERIAL_READSTRINGUNTIL_HELPURL = "https://www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg.SERIAL_READSTRINGUNTIL_CONTENT = "Cadena leída hasta";
Blockly.Msg.SERIAL_READSTRINGUNTIL_TOOLTIP = "lee los caracteres del búfer en serie en una cadena";
Blockly.Msg.SERIAL_PRINT_CONTENT = "envía el texto al puerto serie:";
Blockly.Msg.SERIAL_PRINT_TOOLTIP = "envía datos al puerto serie para vigilancia con el monitor ASCII";
Blockly.Msg.SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";

//Arduino base servo category blocks
Blockly.Msg.SERVO_MOVE_TOOLTIP = "rotación posible entre 0 ~ 180 grados";
Blockly.Msg.SERVO_MOVE_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.SERVO_PIN = "PIN#";
Blockly.Msg.SERVO_MOVE_INPUT = "Girar el servomotor";
Blockly.Msg.SERVO_MOVE_DEGREE = "en ángulo (0 ~ 180 °) de";
Blockly.Msg.SERVO_READ_DEGREES_INPUT = "el ángulo del servomotor";
Blockly.Msg.SERVO_READ_DEGREES_TOOLTIP = "devuelve el número de grados de la última rotación";
Blockly.Msg.SERVO_READ_DEGREES_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";

//X-NUCLEO-IKS01A3 shield blocks: the X-NUCLEO-IKS01A3 is a motion MEMS and environmental sensor evaluation board system, for ST Nucleo boards.
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_INPUT = "valor del sensor de temperatura a bordo";
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_TOOLTIP = "HTS221: temperatura digital capacitiva en ° Celsius";
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_HELPURL = "valor del sensor de temperatura a bordo";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_INPUT = "valor del sensor de humedad a bordo";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_TOOLTIP = "HTS221: humedad relativa digital capacitiva en porcentaje";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_HELPURL = "https://www.st.com/en/ecosystems/x-nucleo-iks01a3.html";
