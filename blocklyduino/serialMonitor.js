var {ipcRenderer} = require("electron");
var remote = require('electron').remote;
var fs = require('fs');

window.addEventListener('load', function load(event) {
    var window = remote.getCurrentWindow();
    var connexion = false;
    document.getElementById('btn_serialSend').disabled = true;
    document.getElementById('btn_serialPeekClear').onclick = function () {
        document.getElementById('serialPeek').textContent = '';
    };
    document.getElementById('btn_serialSend').onclick = function () {
        var entree = document.getElementById('serialSendBox').value;
        if (s_p.isOpen) {
            document.getElementById('serialPeek').innerHTML += entree + "<br>";
            s_p.write(entree);
        }
    };
    document.getElementById('btn_serialConnect').onclick = function (event) {
        var SerialPort = require("serialport");
        var Readline = require('@serialport/parser-readline');
        var moniteur = document.getElementById('serialPeek');        
        // var serialSpeedMenu = profile.default['serialList'];
        // serialSpeedMenu.forEach(function () {
            // var option = document.createElement('option');
            // option.value = serialSpeedMenu;
            // option.text = serialSpeedMenu;
            // serialConnectSpeed_Menu.appendChild(option);
        // };
        var baud = parseInt(document.getElementById('serialConnectSpeed_Menu').value);
        var comPortToUse = localStorage.getItem("comPort");
        s_p = new SerialPort(comPortToUse, {baudRate: baud, autoOpen: false});
        var parser = s_p.pipe(new Readline({delimiter: '\n'}));
        if (connexion) {
            document.getElementById('btn_serialConnect').innerHTML = "<span class='fa fa-play'> Démarrer</span>";
            document.getElementById('btn_serialSend').disabled = true;
            s_p.close(function (err) {
                moniteur.innerHTML += 'arrêt<br>';
            });
            connexion = false;
        } else {
            document.getElementById('btn_serialConnect').innerHTML = "<span class='fa fa-pause'> Arrêter</span>";
            document.getElementById('btn_serialSend').disabled = false;
            s_p.on('open', function(){
                moniteur.innerHTML += 'démarrage de la communication<br>';
            });
            connexion = true;
            s_p.on('data', function (data) {
                if (connexion) {
                    moniteur.innerHTML += data + "<br>";
                    moniteur.scrollTop = moniteur.scrollHeight;
                    moniteur.animate({scrollTop: moniteur.scrollHeight});
                }
            });
        }
    };
    // document.getElementById('btn_serialPeekCSV').onclick = function (event) {
        // ipcRenderer.send('save-csv');
    // };
    // ipcRenderer.on('saved-csv', function (event, path) {
        // var code = document.getElementById('serialPeek').innerHTML;
        // code = code.split('<br>').join('\n');
        // if (path === null) {
            // return;
        // } else {
            // fs.writeFile(path, code, function (err) {
                // if (err)
                    // return console.log(err);
            // });
        // }
    // });
});