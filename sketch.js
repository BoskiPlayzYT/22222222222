var car;
var wheel; 
var circle; 
var circle2; 
var carImage;
var wheelImage;

function preload(){
 wheel.add(circle);
 wheel.add(circle2);
 carImage = loadImage("car.png");
 wheelImage = loadImage("unnamed.png");
}

function setup() {
 createCanvas(600, 600);
 car = createSprite(200, 200);
 wheel = createGroup();
 circle = createSprite(300, 300);
 circle2 = createSprite(100, 100);
 car.addImage("car.png", carImage);
 circle.addImage("unnamed", wheelImage);
 circle2.addImage("unnamed", wheelImage);
}

function draw() {
 background(200);
 drawSprites();
}