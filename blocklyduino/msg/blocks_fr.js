'use strict';

goog.provide('Blockly.Msg.blocks_fr');

goog.require('Blockly.Msg');

Blockly.Msg.TITLE2 = " > programmation visuelle par blocs pour Arduino";

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["1 (état haut)", "HIGH"], ["0 (état bas)", "LOW"]];

//Arduino base cateory blocks
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "mettre la DEL sur la carte à l'état logique";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "éteint ou allume la DEL sur la carte Arduino";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "mettre la broche";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "à l'état logique";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "écrit une valeur (0 ou 1) sur la broche choisie pour la sortie d'informations logiques";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "l'état logique sur la broche";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "lit la valeur (0 ou 1) sur la broche choisie pour l'entrée d'informations logiques";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "envoyer sur la broche MLI~ ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "la valeur";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "écrit une valeur (comprise entre 0 et 255) sur la broche choisie pour la sortie d'informations modulées.\nATTENTION à vérifier que la broche choisie porte le signe PWM~ !";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "la valeur lue sur la broche d'entrée Analogique";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "lit la valeur (comprise entre 0 et 1023) sur la broche choisie pour l'entrée d'informations analogiques.\nATTENTION à vérifier que la broche choisie soit de type A# (exemple : A0,A1,...) ";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "faire une temporisation (en ms) de";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "spécifier le temps d'attente, arrête l'exécution du programme pendant la durée indiquée";
Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_ANGLE = "angle de ";
Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP = "renvoie une valeur entre 0~180°";
Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL = "";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "émettre un son sur la broche";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "d'une fréquence (Hz)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "émettre un son sur la broche selectionnée";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "stopper le son sur la broche";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "arrêter le son sur la broche selectionnée";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_SERIAL_PRINT_CONTENT = "afficher sur le port série le texte";
Blockly.Msg.ARDUINO_SERIAL_PRINT_TOOLTIP = "envoie des données sur le port série pour surveillance par le moniteur en ASCII";
Blockly.Msg.ARDUINO_SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";