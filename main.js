//Global Vars
let Tiger1;
let myColors = ["blue", "red", "orange", "green", "yellow", "purple"];
let tigersArray = [];

//Setup Function
function setup() {
  createCanvas(400, 400);
  
//Create 50 tigers with random attributes
  for(let i = 0; i<50; i++){
    Tiger1 = new Tiger(random(100, 200), random(100, 200), random(1, 2), random(1, 3), random(1, 3), random(myColors));
    
    append(tigersArray, Tiger1)
  }
}
//Draw Function
function draw() {
  background("lightgreen");
  
  //move our 50 tigers
  for(let i = 0; i<50; i++){
    tigersArray[i].drawTiger();
    tigersArray[i].moveTiger();
  } 
}
//Tiger class
class Tiger{
  constructor(x, y, size, speedX, speedY, Color){
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.Color = Color;
  }
//Draw tiger on background
drawTiger(){
  push()
  translate(this.x, this.y)
  scale(this.size)
  fill(this.Color)
  ellipse(8, -7, 7)
  ellipse(-8, -7, 7)
  ellipse(0, 0, 20, 20)
  fill("black")
  stroke("black")
  triangle(0,-7, 3, -10, -3, -10)
  stroke("white")
  ellipse(5, 0, 5)
  ellipse(-5, 0, 5)
  stroke("black")
  fill("brown")
  triangle(0,0, 3, 3, -3, 3)
  arc(0, 5, 3, 6, 0, 180)
  pop()
  }
//Move tiger
moveTiger(){
  this.x += this.speedX;
  this.y += this.speedY;
  
  if(this.x < 0 || this.x > 400){
    this.speedX *= -1;
  }
  
  if(this.y < 0 || this.y > 400){
    this.speedY *= -1;
  }
}
}
