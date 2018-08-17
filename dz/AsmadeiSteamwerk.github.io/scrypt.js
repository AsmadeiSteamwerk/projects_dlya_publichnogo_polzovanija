let canvas = document.getElementById("clocks"),
context = canvas.getContext("2d"),
circle, line, linear, thor, square;

circle = new Path2D();
circle.arc(50, 50, 50, 0, 2 * Math.PI);

context.stroke(circle);

line = new Path2D();
line.moveTo(50, 50);
line.lineTo(50, 5);

context.lineWidth = 2;


context.fillStyle = "green";
context.strokeStyle = "red";

context.stroke(line);

linear = new Path2D();

linear.moveTo(50, 50);
linear.lineTo(50, 20);

context.lineWidth = 4;
context.strokeStyle = "black";
context.stroke(linear);

thor = new Path2D();

thor.moveTo(50, 50);
thor.lineTo(50, 30);

context.lineWidth = 3;
context.strokeStyle = "green";
context.stroke(thor);




let R = 100/2;

for(let i = 0; i < 60; ++i) {

    let angle = (i/60) * (2 * Math.PI);
    let pX = Math.cos(angle) * R;
    let pY = -Math.sin(angle) * R;
    let qX = 0.9 * pX;
    let qY= 0.9 * pY;

    pX += R; pY += R;
    qX += R; qY+= R;
  
    line = new Path2D();
    line.moveTo(pX, pY);
    line.lineTo(qX, qY);  
    context.strokeStyle = "blue";      
    context.stroke(line);

}

let date = new Date ();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

console.log(hours, minutes, seconds);

let secondsAngle = (seconds / 60) * (2 * Math.PI);
let minutesAngle = (minutes / 60) * (2 * Math.PI);
let hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);

secondsAngle = Math.PI / 2 - secondsAngle;
minutesAngle = Math.PI / 2 - minutesAngle;
hoursAngle = Math.PI / 2 - hoursAngle;






function drawWath()  {
context.clearRect(0, 0, 300, 300);

setTimeout(drawWath, 1000);
}

drawWath();