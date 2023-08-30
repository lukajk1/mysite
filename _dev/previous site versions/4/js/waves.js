var numRows = 50;
var numCols = numRows;
var isDraw = true;
var size = 14;
var waves = [];
var frame = 0;
var inputUpdate = false;

var x = 0;

var bu = 0.21;
var bl = 0.2;
var cu = 1;
var cl = 0;

var canvas = $('.dots');
var context = canvas[0].getContext('2d');
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();
canvas.attr({height: canvasHeight, width: canvasWidth});

function waveInit() {
    if (!waves.length || inputUpdate) {
    for(var i = 0; i < numRows; i++) {
        var h = buildWave(i, bu, bl, cu, cl);
        inputUpdate  = false;
    }
}
}


function buildWave(i, bu, bl, cu, cl) {
    var bRand = Math.round((Math.random() * (bu - bl) + bl)* 1000) / 1000;
    var cRand = Math.round((Math.random() * (cu - cl) + cl) * 1000) / 1000;
    var wave = [bRand, cRand];
    waves[i] = wave;
}
function findValue(i, j, frame) {
    var b = waves[j][0];
    var c = waves[j][1];
    var color = 0.5 * Math.cos((b * i) - (c + (frame / 6 + 
                                              Math.round((Math.random() * (1 - 0) + 0) * 1000) / 1000
                                              ))) + 0.5;
    var c = Math.round(color * 10) / 10;
    var h = convHex(c);
    return h;
}

function pullVal() {

    var d = document.getElementById("bounds").elements;
    //console.log(Number(d[1].value) + 2);
}

function pullValues() {
    var elements = document.getElementById("bounds").elements;
    for(var i = 0 ; i < elements.length ; i++) {
        var y = Number(elements[i].value);
        switch (i) {
            case 0: 
                bu = y;
                break;
            case 1: 
                bl = y;
                break;
            case 2: 
                cu = y;
                break;
            case 3: 
                cl = y;
                break;
        }
        inputUpdate = true;
    }
    
    //console.log(elements);
}

function draw() {
    for(var i = 0; i < numRows; i++) {
        
        for(var j = 0; j < numCols; j++) {
            var h = findValue(i, j, frame);
            var x = (j * size);
            var y = (i * size);
            drawSq(x, y, h, size);
        }
    }
    frame += 1;
    pullValues();
    pullVal();
    waveInit();
}

waveInit();
function drawSq(x, y, color, size) {
    context.beginPath();
    context.rect(x, y, size, size);
    context.fillStyle = color;
    context.fill();
}


var drawInterval= setInterval(draw, 100);

function toggleDraw() {
    if (isDraw) {
        clearInterval(drawInterval);
        isDraw = false;
    }   
    else {
        drawInterval = setInterval(draw, 100);
        isDraw = true;
    }
}

function convHex(a){
    a = Math.round(a * 255).toString(16);
    return "#" + a + a + a;
}