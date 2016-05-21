var state = {
    table: []
}
function chartselements(day, time, temperature) {
    this.day = day;
    this.time = time;
    this.temperature = temperature;
}

function parsing(str) {
    var line = str.split('|');
    for (var i = 0; i < line.length; i++) {
        var types = line[i].split(' ');
        state.table[i] = new chartselements(types[0], types[1], types[3]);
    };
    return state.table;
}
function day(arr) {
    var temp = [];
    var inputDay = document.getElementById("day");
    var beginTime = document.getElementById("begin");
    var endTime = document.getElementById("end");
    if (inputDay.value != "" && beginTime.value != "" && endTime.value != "") {
        temp = arr.filter(function (item, i, arr) {
            if (item.day === inputDay.value && item.time >= beginTime.value && item.time <= endTime.value)
            { return item; }
        })
    }
    else {
        if (inputDay.value != "" && beginTime.value != "") {
            temp = arr.filter(function (item, i, arr) {
                if (item.day === inputDay.value && item.time >= beginTime.value) { return item; }
            })
        }
        else {
            if (inputDay.value != "") {
                temp = arr.filter(function (item, i, arr) {
                    if (item.day === inputDay.value) { return item; }
                })
            }
        }
    }
    return temp.length == 0 ? temp = arr.filter(function (item, i, arr) { return i <= 20; }) : temp
}
function draw() {
    var ctx = document.getElementById("myChart");
    var labelmas = [], datemas = [];
    state.table = day(state.table);
    state.table.forEach(function (item, i, arr) {
        labelmas[i] = item.time;
        datemas[i] = item.temperature;
    });    
    var myChart = new Chart.Line(ctx, {
        type: 'line',
        data: {
            labels: labelmas,
            datasets: [{
                label: 'valueTemperature',
                data: datemas,
                backgroundColor: "rgba(75,192,192,0.4)"
            }]

        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


function load() {
    var mydata = JSON.parse(data);
    var str = mydata[0].file;
    parsing(str);
}