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
Ball.prototype.update = function () {
//    Check if the ball is still inside canvas or not
    if((this.x + this.size )>=width)
    {
        this.velX = -this.velX;
    }
    if((this.x - this.size )<=0)
    {
        this.velX = -this.velX;
    }
    if((this.y + this.size )>=height)
    {
        this.velY = -this.velY;
    }
    if((this.y - this.size )<=0)
    {
        this.velY = -this.velY;
    }
    //Co-ordinates are added - according to velocity
    this.x+=this.velX;
    this.y+=this.velY;
}

let balls = [];

function loop() {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, width, height);
//    Creating 25 balls -
    while(balls.length<25)
    {   let size = random(5,10);
        let myb = new Ball(
            random(0+size,width-size),
            random(0+size,height-size),
            random(-7,7),
            random(-7,7),
            'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
            size
        );
        balls.push(myb);
    }

//    Creating ball on screen
    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
    }

    requestAnimationFrame(loop);
}
loop();