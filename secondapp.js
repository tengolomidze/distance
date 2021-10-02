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


if(screenX < 1100){
    document.querySelector("#mobile").style.display = "block"
}


canvas.height = screenY 
canvas.width = screenX 

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



var Distance = 0;
var DistanceFirstDotToSecondDot = 0;

var DistanceTraveled = 0;

canvas.addEventListener('click', function(e){
   
})


