function renderingConstantInit() {
	for(var k in profile) {
        if(profile[k][0] instanceof Object) {
			var option = document.createElement('option');
			option.value = profile[k][0]._id;
			option.text = profile[k][0].description;
			document.getElementById('boardMenu').appendChild(option);
        };
    }
	for(var k in profile) {
        if(profile[k][0] instanceof Object) {
			var option = document.createElement('option');
			option.value = profile[k][0]._id;
			option.text = profile[k][0].description;
			document.getElementById('boardDescriptionSelector').appendChild(option);
        };
    }
}