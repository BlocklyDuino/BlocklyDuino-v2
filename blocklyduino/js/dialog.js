// Make the DIV element draggable-keyboard-dialog draggable:
dragElement(document.getElementById("keyboard_nav"));
dragElement(document.getElementById("aboutHelp"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "_header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
;

/**
 * Hide/show the key map panel.
 * @param {boolean} state The state of the checkbox. True if checked, false
 *     otherwise.
 * @package
 */
function toggleDisplayHelp() {
    document.getElementById('aboutHelp').style.display = 'block';
    document.getElementById('aboutHelp').style.left = (top.innerWidth - document.getElementById('keyboard_nav').offsetWidth) / 2 + "px";
    document.getElementById('aboutHelp').style.top = (top.innerHeight - document.getElementById('keyboard_nav').offsetHeight) / 2 + "px";
}
//icons button mouser over
document.getElementById('undoButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['undoButton_span'];
};
document.getElementById('undoButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('redoButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['redoButton_span'];
};
document.getElementById('redoButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('boardIcon').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['boardSpan'];
};
document.getElementById('boardIcon').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('serialIcon').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['serialSpan'];
};
document.getElementById('serialIcon').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('verifyButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['verifyButton_span'];
};
document.getElementById('verifyButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('uploadButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['uploadButton_span'];
};
document.getElementById('uploadButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('serialConnectButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['serialConnectButton_span'];
};
document.getElementById('serialConnectButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('saveCodeButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['saveCodeButton_span'];
};
document.getElementById('saveCodeButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('newButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['newButton_span'];
};
document.getElementById('newButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('saveXMLButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['saveXMLButton_span'];
};
document.getElementById('saveXMLButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('loadXMLfakeButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['loadXMLfakeButton_span'];
};
document.getElementById('loadXMLfakeButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('resetButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['resetButton_span'];
};
document.getElementById('resetButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('helpButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['helpButton_span'];
};
document.getElementById('helpButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};