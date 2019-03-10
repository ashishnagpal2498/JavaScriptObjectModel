var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
    var num = Math.floor(Math.random()*(max-min)) + min;
    return num;
}

//Object Modelling -

function Ball(x,y,velx,vely,color,size) {
    this.x = x;
    this.y = y;
    this.velX=velx;
    this.velY=vely;
    this.color = color
    this.size=size
}

Ball.prototype.draw = function () {
    ctx.beginPath(); //Beigining the drawing on the Canvas
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI) //5 pms - x -
    ctx.fill() ; //End the canvas here
}
