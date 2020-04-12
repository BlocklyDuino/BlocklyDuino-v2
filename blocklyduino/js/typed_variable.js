var createVarBtnIntCallBack = function (button) {
    Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'varInt');
};

var createVarBtnFloatCallBack = function (button) {
    Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'varFloat');
};

var createVarBtnStringCallBack = function (button) {
    Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'varString');
};

var intVariablesCallBack = function (currWorkspace) {
    var allIntVars = currWorkspace.getVariablesOfType('varInt');
    var xmlList = [];
    var createVarBtnXml = Blockly.Xml.textToDom('<xml><button text="Create Int Variable" callbackKey="createVarBtnInt">' +
            '</button></xml>').firstChild;
    xmlList.push(createVarBtnXml);
    if (allIntVars.length > 0) {
        if (Blockly.Blocks['vars_set_int']) {
            var firstVariable = allIntVars[allIntVars.length - 1];
            var gap = 24;
            var blockText =
                '<xml>' +
                '<block type="vars_set_int" gap="' + gap + '">' +
                '<field name="VAR_SET_INT" variabletype="varInt">' + firstVariable.name + '</field>' +
                '</block>' +
                '</xml>';
            var block = Blockly.Xml.textToDom(blockText).firstChild;
            xmlList.push(block);
        }
        if (Blockly.Blocks['vars_get_int']) {
            allIntVars.sort(Blockly.VariableModel.compareByType);
            for (var i = 0, variable; variable = allIntVars[i]; i++) {
                var blockText =
                    '<xml>' +
                    '<block type="vars_get_int" gap="8">' +
                    '<field name="VAR_GET_INT" variabletype="varInt">' + variable.name + '</field>' +
                    '</block>' +
                    '</xml>';
                var block = Blockly.Xml.textToDom(blockText).firstChild;
                xmlList.push(block);
            }
        }
    }
    return xmlList;
};

var floatVariablesCallBack = function (currWorkspace) {
    var allFloatVars = currWorkspace.getVariablesOfType('varFloat');
    var xmlList = [];
    var createVarBtnXml = Blockly.Xml.textToDom('<xml><button text="Create Float Variable" callbackKey="createVarBtnFloat">' +
            '</button></xml>').firstChild;
    xmlList.push(createVarBtnXml);
    if (allFloatVars.length > 0) {
        if (Blockly.Blocks['vars_set_float']) {
            var firstVariable = allFloatVars[allFloatVars.length - 1];
            var gap = 24;
            var blockText =
                '<xml>' +
                '<block type="vars_set_float" gap="' + gap + '">' +
                '<field name="VAR_SET_FLOAT" variabletype="varFloat">' + firstVariable.name + '</field>' +
                '</block>' +
                '</xml>';
            var block = Blockly.Xml.textToDom(blockText).firstChild;
            xmlList.push(block);
        }
        if (Blockly.Blocks['vars_get_float']) {
            allFloatVars.sort(Blockly.VariableModel.compareByType);
            for (var i = 0, variable; variable = allFloatVars[i]; i++) {
                var blockText =
                    '<xml>' +
                    '<block type="vars_get_float" gap="8">' +
                    '<field name="VAR_GET_FLOAT" variabletype="varFloat">' + variable.name + '</field>' +
                    '</block>' +
                    '</xml>';
                var block = Blockly.Xml.textToDom(blockText).firstChild;
                xmlList.push(block);
            }
        }
    }
    return xmlList;
};

var stringVariablesCallBack = function (currWorkspace) {
    var allStringVars = currWorkspace.getVariablesOfType('varString');
    var xmlList = [];
    var createVarBtnXml = Blockly.Xml.textToDom('<xml><button text="Create String Variable" callbackKey="createVarBtnString">' +
            '</button></xml>').firstChild;
    xmlList.push(createVarBtnXml);
    if (allStringVars.length > 0) {
        if (Blockly.Blocks['vars_set_string']) {
            var firstVariable = allStringVars[allStringVars.length - 1];
            var gap = 24;
            var blockText =
                '<xml>' +
                '<block type="vars_set_string" gap="' + gap + '">' +
                '<field name="VAR_SET_STRING" variabletype="varString">' + firstVariable.name + '</field>' +
                '</block>' +
                '</xml>';
            var block = Blockly.Xml.textToDom(blockText).firstChild;
            xmlList.push(block);
        }
        if (Blockly.Blocks['vars_get_string']) {
            allStringVars.sort(Blockly.VariableModel.compareByType);
            for (var i = 0, variable; variable = allStringVars[i]; i++) {
                var blockText =
                    '<xml>' +
                    '<block type="vars_get_string" gap="8">' +
                    '<field name="VAR_GET_STRING" variabletype="varString">' + variable.name + '</field>' +
                    '</block>' +
                    '</xml>';
                var block = Blockly.Xml.textToDom(blockText).firstChild;
                xmlList.push(block);
            }
        }
    }
    return xmlList;
};