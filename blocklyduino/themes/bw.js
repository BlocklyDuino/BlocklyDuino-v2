/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2018 Google Inc.
 * https://developers.google.com/blockly/
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
 * @fileoverview black & white contrast theme.
 */
'use strict';

goog.provide('Blockly.Themes.blackWhite');

goog.require('Blockly.Theme');

// Temporary holding object.
Blockly.Themes.blackWhite = {};

Blockly.Themes.blackWhite.defaultBlockStyles = {
    "colour_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "list_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "logic_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "loop_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "math_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "procedure_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "text_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "variable_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "variable_dynamic_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "hat_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000",
        "hat": "cap"
    },
    "arduino_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "seeed_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "grove_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "servo_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    }
};

Blockly.Themes.blackWhite.categoryStyles = {
    "colour_category": {
        "colour": "#000000",
    },
    "list_category": {
        "colour": "#000000",
    },
    "logic_category": {
        "colour": "#000000",
    },
    "loop_category": {
        "colour": "#000000",
    },
    "math_category": {
        "colour": "#000000",
    },
    "procedure_category": {
        "colour": "#000000",
    },
    "text_category": {
        "colour": "#000000",
    },
    "variable_category": {
        "colour": "#000000",
    },
    "variable_dynamic_category": {
        "colour": "#000000",
    },
    "arduino_category": {
        "colour": "#000000",
    },
    "seeed_category": {
        "colour": "#000000",
    },
    "grove_category": {
        "colour": "#000000",
    },
    "servo_category": {
        "colour": "#000000",
    }
};

Blockly.Themes.blackWhite =
        new Blockly.Theme('blackWhite', Blockly.Themes.blackWhite.defaultBlockStyles,
                Blockly.Themes.blackWhite.categoryStyles);

Blockly.Themes.blackWhite.setComponentStyle('toolboxBackgroundColour', '#f9f9f9');
Blockly.Themes.blackWhite.setComponentStyle('toolboxForegroundColour', '#f9f9f9');
Blockly.Themes.blackWhite.setComponentStyle('flyoutOpacity', 0);