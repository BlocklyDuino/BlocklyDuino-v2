function renderingConstantInit() {
    // const response = fetch('./boards.json');
    // const data = response.json();

    boards.forEach(obj => {
		Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key} ${value}`);
        });
        // var option = document.createElement('option');
        // option.value = serialConnectSpeedAvailable;
        // option.text = serialConnectSpeedAvailable;
        // serialConnectSpeedMenu.appendChild(option);
		// console.log(profile.default.description);
    });
	console.log(profile.default.description);
}