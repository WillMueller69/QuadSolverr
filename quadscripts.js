// //Javascript for drawing and calculating quadratics 2017
// var a, b, c, context, w, h, k = 10;
// var w = canvas.width;
// var h = canvas.height;


// function init() {
//     canvas = document.getElementById("mycanvas");
//     ctx = canvas.getContext("2d");
//     w = canvas.width = 600;
//     h = canvas.height = 400;
//     console.log('canvas is loaded into context', w);
// } // close init

// function QF() {
//     // getting values to do quadratic formula
//     a = $("#linA").val();
//     b = $("#linB").val();
//     c = $("#constant").val();
//     var discriminant = (b ** 2) - (4 * a * c);
//     var other_part = -b;
//     var bottom_part = 2 * a;
//     if (discriminant < 0) {
//         var quadForm_answer1 = "Your Answer Is Undefined";
//         var quadForm_answer2 = "Your Answer Is Undefined";
//         $("#quadformanswer").text("X1 Intercept = (" + quadForm_answer1 + ")");
//         $("#quadformanswer2").text("X2 Intercept = (" + quadForm_answer2 + ")");
//     } else {
//         quadForm_answer1 = (other_part + Math.sqrt(discriminant)) / bottom_part;
//         quadForm_answer2 = (other_part - Math.sqrt(discriminant)) / bottom_part;
//         console.log(quadForm_answer1);
//         console.log(quadForm_answer2);
//         // var answer = (-b+((b**2)-(4*a*c))/(2*a);
//         // console.log(answer)
//         console.log(a, b, c);
//         $("#quadformanswer").text("X1 Intercept = (" + quadForm_answer1 + ",0" + ")");
//         $("#quadformanswer2").text("X2 Intercept = (" + quadForm_answer2 + ",0" + ")");
//     }

//     results();
//     graphpaper();
//     vertLineGrapher();
//     horizLineGrapher();
//     vertLineGrapher2();
//     horizLineGrapher2();
// } // close QF

// function results() {
//     // finding vertext and displaying symline and yint results
//     vX = -(b * 1) / (2 * a);
//     vY = a * Math.pow(vX, 2) + b * vX + c * 1;
//     $("#vertex").text("Vertex is at (" + vX + "," + vY + ")");
//     $("#yInt").text("The Y Intercept is at (0," + c + ")");
//     $("#correspondingPoint").text("(" + 2 * vX + "," + c + ")")
//     graphQuad()
// } // close results()

// function graphpaper() {
//     // the x and y axis drawn
//     ctx.fillStyle = "black"
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.moveTo(0, h / 2);
//     ctx.lineTo(w, h / 2);
//     ctx.stroke();
//     ctx.moveTo(w / 2, 0);
//     ctx.lineTo(w / 2, h);
//     ctx.stroke();
// }

// function vertLineGrapher() {
//     var vlX = w / 2;
//     var vlY = 0;
//     ctx.filltyle = "black";
//     ctx.fillRect(295, 195, 10, 10);
//     while (vlX < 600) {
//         vlX = vlX + k;
//         ctx.fillRect(vlX, vlY, 2, 400);
//     }
// }

// function vertLineGrapher2() {
//     var vlX2 = 300;
//     var vlY2 = 0;
//     ctx.fillStyle = "black";
//     ctx.fillRect(295, 195, 10, 10);
//     while (vlX2 > 0) {
//         vlX2 = vlX2 - k;
//         ctx.fillRect(vlX2, vlY2, 2, 400);
//         console.log("verline2")
//     }
// }

// function horizLineGrapher() {
//     var hlX = 0;
//     var hlY = 200;
//     ctx.fillStyle = "black";
//     while (hlY < 400) {
//         hlY = hlY + k;
//         ctx.fillRect(hlX, hlY, 600, 2);
//     }
// }

// function horizLineGrapher2() {
//     var hlX2 = 0;
//     var hlY2 = 200;
//     ctx.fillStyle = "black";
//     while (hlY2 > 0) {
//         hlY2 = hlY2 - k;
//         ctx.fillRect(hlX2, hlY2, 600, 2);
//         console.log("horizline2")
//     }
// }

// function zoomIn() {
//     k = k + 10;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// function zoomOut() {
//     k = k - 10;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// function graphQuad () {
//   for (var i = 0; i < w; i++) {
//     x = (w/2-i)/k;
//     y = c*1+b*x+a*Math.pow(x,2);
//     nx =  (w/2-(i+1))/k;
//     ny =  c*1+b*nx+a*Math.pow(nx,2);
//     console.log(x,y,nx,ny)
//     ctx.beginPath();
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = "Red";
//     ctx.moveTo((w/2)+(x*zoom), (h/2)-(y*zoom));
//     ctx.lineTo((w/2)+(nx*zoom), (h/2)-(ny*zoom));
//     ctx.stroke();
//   }


//Javascript for drawing and calculating quadratics 2017
var a, b, c, context, w, h, k = 10;
var zoom = 18;
var w = canvas.width;
var h = canvas.height;


function init() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    w = canvas.width = 600;
    h = canvas.height = 400;
    console.log('canvas is loaded into context', w);
} // close init

function QF() {
    // getting values to do quadratic formula
    a = $("#linA").val();
    b = $("#linB").val();
    c = $("#constant").val();
    var discriminant = (b ** 2) - (4 * a * c);
    var other_part = -b;
    var bottom_part = 2 * a;
    if (discriminant < 0) {
        var quadForm_answer1 = "Your Answer Is Undefined";
        var quadForm_answer2 = "Your Answer Is Undefined";
        $("#quadformanswer").text(quadForm_answer1);
        $("#quadformanswer2").text(quadForm_answer2);
    } else {
        quadForm_answer1 = (other_part + Math.sqrt(discriminant)) / bottom_part;
        quadForm_answer2 = (other_part - Math.sqrt(discriminant)) / bottom_part;
        console.log(quadForm_answer1);
        console.log(quadForm_answer2);
        // var answer = (-b+((b**2)-(4*a*c))/(2*a);
        // console.log(answer)
        console.log(a, b, c);
        $("#quadformanswer").text(quadForm_answer1);
        $("#quadformanswer2").text(quadForm_answer2);
        ctx.fillStyle = "red"
        ctx.arc((w / 2) + (quadForm_answer1 * zoom), (h / 2), 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.arc((w / 2) + (quadForm_answer2 * zoom), (h / 2), 6, 0, 2 * Math.PI);
        ctx.fill();

        
    }

    results();
    graphpaper();
    vertLineGrapher();
    horizLineGrapher();
    vertLineGrapher2();
    horizLineGrapher2();
} // close QF

function results() {
    // finding vertext and displaying symline and yint results
    vX = -(b * 1) / (2 * a);
    vY = a * Math.pow(vX, 2) + b * vX + c * 1;
    vX = vX.toFixed(2);
    vY = vY.toFixed(2);

    $("#vertex").text("Vertex is at (" + vX + "," + vY + ")");
    $("#yInt").text("The Y Intercept is at (0," + c + ")");
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc((w / 2) + (vX * zoom), (h / 2) - (vY * zoom), 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.arc((w/2),(h/2) - (c*zoom), 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    $("#correspondingPoint").text("Corresponding Point is at(" + 2 * vX + "," + c + ")")
    graphQuad();
} // close results()

function graphpaper() {
    // the x and y axis drawn
    ctx.strokeStyle = "#DCDADA"
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2, h);
    ctx.stroke();
}

function vertLineGrapher() {
    ctx.stokeStyle = "rgba(0,255,0,.5)";
    var vlX = w / 2;
    var vlY = 0;
    ctx.fillStyle = "#DCDADA";
    ctx.fillRect(295, 195, 10, 10);
    while (vlX < w) {
        vlX = vlX + zoom;
        ctx.fillRect(vlX, vlY, 2, h);
    }
}

function vertLineGrapher2() {
    var vlX2 = w / 2;
    var vlY2 = 0;
    ctx.fillStyle = "#DCDADA";
    ctx.fillRect(295, 195, 10, 10);
    while (vlX2 > 0) {
        vlX2 = vlX2 - zoom;
        ctx.fillRect(vlX2, vlY2, 2, h);
        console.log("verline2")
    }
}

function horizLineGrapher() {
    var hlX = 0;
    var hlY = h / 2;
    ctx.fillStyle = "#DCDADA";
    while (hlY < 400) {
        hlY = hlY + zoom;
        ctx.fillRect(hlX, hlY, w, 2);
    }
}

function horizLineGrapher2() {
    var hlX2 = 0;
    var hlY2 = h / 2;
    ctx.fillStyle = "#DCDADA";
    while (hlY2 > 0) {
        hlY2 = hlY2 - zoom;
        ctx.fillRect(hlX2, hlY2, w, 2);
        console.log("horizline2")
    }
}

function zoomIn() {
    zoom = zoom + 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function zoomOut() {
    zoom = zoom - 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function graphQuad() {
    for (var i = 0; i < w; i++) {
        x = (w / 2 - i) / zoom;
        y = c * 1 + b * x + a * Math.pow(x, 2);
        nx = (w / 2 - (i + 1)) / zoom;
        ny = c * 1 + b * nx + a * Math.pow(nx, 2);
        console.log(x, y, nx, ny)
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "Red";
        ctx.moveTo((w / 2) + (x * zoom), (h / 2) - (y * zoom));
        ctx.lineTo((w / 2) + (nx * zoom), (h / 2) - (ny * zoom));
        ctx.stroke();
    }
}