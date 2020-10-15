/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Intercept data to modify toolbox for user
 * @author scanet@libreduc.cc (Sébastien CANET)
 */


/**
 * Build the xml using toolboxes checked in config modal and stored in session
 */
Code.buildToolbox = function() {
	var toolboxXml = BLOCKLY_TOOLBOX_XML['toolboxblocklyduino'];
	// set the toolbox from url parameters
	var toolboxIds = Code.getStringParamFromUrl('toolboxids', '');	
	// set the default toolbox if none
	if (toolboxIds === undefined || toolboxIds === "")
		toolboxIds = 'CAT_LOGIC,CAT_LOOPS,CAT_MATH,CAT_TEXT,CAT_LIST,CAT_COLOUR,CAT_VARIABLES,CAT_FUNCTIONS';
		else toolboxIds += ',CAT_LOGIC,CAT_LOOPS,CAT_MATH,CAT_TEXT,CAT_LIST,CAT_COLOUR,CAT_VARIABLES,CAT_FUNCTIONS';
	//save config in local browser storage
	window.localStorage.toolboxids = toolboxIds;
	//parser on xml
	parser = new DOMParser();
	var xmlDoc = parser.parseFromString(toolboxXml,"text/xml");
	var xmlValue = '<xml id="blocklyToolbox">';	
	var xmlids = toolboxIds.split(",");
	// var maxiNodes = xmlDoc.children[0].childNodes.length;
	var i = 0;
	while(xmlDoc.getElementsByTagName("category")[i].getAttribute('toolboxitemid') != "END") {
		if (xmlDoc.getElementsByTagName("category")[i].getAttribute('toolboxitemid') != "null")
			for (var j = 0; j < xmlids.length; j++) {
				if (xmlDoc.getElementsByTagName("category")[i].getAttribute('toolboxitemid') == xmlids[j]) {
					xmlValue += xmlDoc.getElementsByTagName("category")[i].outerHTML;
				}
			}
		i++;
	}
	xmlValue += '</xml>';
	return xmlValue;
};

/**
 * Change toolbox definition
 */
Code.changeToolboxDefinition =  function (){
	Code.loadToolboxDefinition($("#toolboxes").val());
	Code.openConfigToolbox();
}; 

Code.changeLevelToolboxDefinition =  function (level){
	Code.loadToolboxDefinition(level);
	Code.openConfigToolbox();
}; 
