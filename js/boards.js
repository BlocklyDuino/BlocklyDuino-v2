/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
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
 * @fileoverview Helper functions for generating Arduino for blocks.
 * @author gasolin@gmail.com (Fred Lin)
 * @reboot scanet@libreduc.cc (SebCanet)
 */
'use strict';

goog.provide('Blockly.Boards');

//set default profile
profile.default = profile["none"][0];

/**
 * Sets Arduino board
 */
Code.setBoard = function () {
    var boardId = Code.getStringParamFromUrl('board', '');
    if (!boardId) {
        boardId = "none";
    }
    document.getElementById('boardMenu').value = boardId;
    profile.default = profile[boardId][0];
};

function changeBoard() {
    var boardMenu = document.getElementById('boardMenu');
    var newBoard = encodeURIComponent(boardMenu.options[boardMenu.selectedIndex].value);
    var search = window.location.search;
    if (search.length <= 1) {
        search = '?board=' + newBoard;
    } else if (search.match(/[?&]board=[^&]*/)) {
        search = search.replace(/([?&]board=)[^&]*/, '$1' + newBoard);
    } else {
        search = search.replace(/\?/, '?board=' + newBoard + '&');
    }
    profile["default"] = profile[newBoard][0];
    window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
}
;