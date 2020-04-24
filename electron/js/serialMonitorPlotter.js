var smoothieChart = new SmoothieChart({
        millisPerPixel: 44,
        grid: {
            fillStyle: '#ffffff',
            strokeStyle: '#008080',
            sharpLines: true,
            verticalSections: 6
        },
        labels: {
            fillStyle: '#000000',
            fontSize: 13
        },
        tooltip: true,
        maxValue: 1023,
        minValue: 0
    }),
    line0 = new TimeSeries();

setInterval(function () {
    line0.append(new Date().getTime(), document.getElementById('serialSendBox').value);
}, 1000);

smoothieChart.addTimeSeries(line0, {
    lineWidth: 3,
    strokeStyle: 'none',
    fillStyle: 'rgba(0,64,128,0.53)'
});
smoothieChart.streamTo(document.getElementById("serialGraph"), 500);
smoothieChart.stop();
