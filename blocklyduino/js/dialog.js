// Make the DIV element draggable-keyboard-dialog draggable:
dragElement(document.getElementById("keyboard_nav"));
dragDiv(document.getElementById("barre_h"), "V");

function dragElement(elmnt) {
    var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
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
};

// function is used for dragging and moving in rpogram TAB
function dragDiv(element, direction) {
    var md; // remember mouse down info
    const first = document.getElementById("content_code");
    const second = document.getElementById("content_serial");

    element.onmousedown = onMouseDown;

    function onMouseDown(e) {
        //console.log("mouse down: " + e.clientX);
        md = {
            e,
            offsetLeft: element.offsetLeft,
            offsetTop: element.offsetTop,
            firstHeight: first.offsetHeight,
            secondHeight: second.offsetHeight,
            firstWidth: first.offsetWidth,
            secondWidth: second.offsetWidth
        };
        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        }
    }

    function onMouseMove(e) {
        //console.log("mouse move: " + e.clientX);
        var delta = {
            x: e.clientX - md.e.x,
            y: e.clientY - md.e.y
        };

        if (direction === "V") // Horizontal
        {
            // prevent negative-sized elements
            delta.y = Math.min(Math.max(delta.y, -md.firstHeight),
                    md.secondHeight);

            element.style.top = md.offsetTop + delta.y + "px";
            first.style.height = (md.firstHeight + delta.y) + "px";
            second.style.height = (md.secondHeight - delta.y) + "px";
        }
        if (direction === "H") // Horizontal
        {
            // prevent negative-sized elements
            delta.x = Math.min(Math.max(delta.x, -md.firstWidth),
                    md.secondWidth);

            element.style.left = md.offsetLeft + delta.x + "px";
            first.style.width = (md.firstWidth + delta.x) + "px";
            second.style.width = (md.secondWidth - delta.x) + "px";
        }
    }
};

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
document.getElementById('boardMenu').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['boardSpan'];
};
document.getElementById('boardMenu').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('verifyButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['verifyButton_span'];
};
document.getElementById('verifyButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('serialIcon').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['serialSpan'];
};
document.getElementById('serialIcon').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('serialMenu').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['serialSpan'];
};
document.getElementById('serialMenu').onmouseout = function () {
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
document.getElementById('viewCodeButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['viewCodeButton_span'];
};
document.getElementById('viewCodeButton').onmouseout = function () {
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
document.getElementById('setup_sideButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['setup_sideButton_span'];
};
document.getElementById('setup_sideButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('helpButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['helpButton_span'];
};
document.getElementById('helpButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('copyCodeButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['copyCodeButton_span'];
};
document.getElementById('copyCodeButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('config_sideButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['config_sideButton_span'];
};
document.getElementById('config_sideButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('coreUpdateButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['coreUpdateButton_span'];
};
document.getElementById('coreUpdateButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('cleanCLIcacheButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['cleanCLIcacheButton_span'];
};
document.getElementById('cleanCLIcacheButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('listBoardsButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['listBoardsButton_span'];
};
document.getElementById('listBoardsButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('installBoardsInput').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['installBoardsInput_span'];
};
document.getElementById('installBoardsInput').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('installBoardsButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['installBoardsButton_span'];
};
document.getElementById('installBoardsButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('searchlLibInput').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['searchlLibInput_span'];
};
document.getElementById('searchlLibInput').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('searchlLibButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['searchlLibButton_span'];
};
document.getElementById('searchlLibButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('installLibInput').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['installLibInput_span'];
};
document.getElementById('installLibInput').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('installLibButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['installLibButton_span'];
};
document.getElementById('installLibButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('config_sideButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['config_sideButton_span'];
};
document.getElementById('config_sideButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('CLI_githubLinkButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['CLI_githubLinkButton_span'];
};
document.getElementById('CLI_githubLinkButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
