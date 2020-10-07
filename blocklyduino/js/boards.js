/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Helper functions for selecting and changing boards.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

'use strict';

goog.provide('Blockly.Boards');

//set default profile
profile.default = profile["none"][0];

/**
 * Sets board
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
    // var boardMenu = document.getElementById('boardMenu');
    var boardMenu = document.getElementById('boardDescriptionSelector');
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