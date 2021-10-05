const img = document.querySelector("#img")
const canvas = document.querySelector("#canvas")
const DistanceTraveledH1 = document.querySelector("#DistanceTraveled")
const DistanceH1 = document.querySelector("#distance")
const ctx = canvas.getContext('2d')
var clicked = false;
var c = false
// ეკრანის Y სიგრძე
var screenY = screen.height
// ეკრანის X სიგანე
var screenX = screen.width

canvas.height = window.innerWidth
canvas.width = window.innerHeight



var ball = {
    x: 0,
    y: 0,
    r: 5
  
 } 
 
 function Circle(x, y, r){
     ctx.beginPath();
     ctx.arc(x, y, r, 0, Math.PI*2);
     ctx.fill();
     ctx.closePath();
 }

var firstDot = {
    x: 0,
    y: 0
};
var secondDot = {
    x: 0,
    y: 0
};

var first = {
    x: null,
    y: null
};

var last = {
    x: null,
    y: null
};

var Distance = 0;
var DistanceFirstDotToSecondDot = 0;

var DistanceTraveled = 0;

canvas.addEventListener('click', function(e){
    if(c == false){
    if (first.x == null & first.y == null){
        first.x = e.offsetX
        first.y = e.offsetY
    }

    ball.x = e.offsetX;
    ball.y = e.offsetY;

    last.x = e.offsetX;
    last.y = e.offsetY;

    Circle(ball.x, ball.y, ball.r)
    console.log(ball.x + ', ' +ball.y)

    if (clicked == false){
        clicked = true
        firstDot.x = ball.x
        firstDot.y = ball.y
    }

    
    secondDot.x = ball.x
    secondDot.y = ball.y

    var XX = firstDot.x - secondDot.x
    var YY = firstDot.y - secondDot.y

    distanceTraveled = Math.sqrt( XX*XX + YY*YY );
    DistanceFirstDotToSecondDot += distanceTraveled
    DistanceTraveledH1.innerHTML = 'გავლილი მანძილი: ' + Math.floor(DistanceFirstDotToSecondDot) + ' მეტრი.'

    ctx.beginPath();
    ctx.moveTo(firstDot.x, firstDot.y);
    ctx.lineTo(secondDot.x, secondDot.y);
    firstDot.x = ball.x
    firstDot.y = ball.y
    ctx.stroke();
    ctx.closePath();
}
})


function cal(){
    c = true
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(first.x, first.y);
    ctx.lineTo(last.x, last.y);
    ctx.stroke();
    ctx.closePath();

    var radius = Math.atan2(first.x - last.x, first.y - last.y);
    var degree = (radius * (180 / Math.PI) * -1); 
    if (degree < 0){
        degree = 360 + degree
    }

    var XX = first.x - last.x
    var YY = first.y - last.y
    DistanceH1.innerHTML = 'გადაადგილება: '+ Math.floor(Math.sqrt( XX*XX + YY*YY )) + 'მეტრი, '+ Math.floor(degree) + ' გრადუსი.'
    
}
