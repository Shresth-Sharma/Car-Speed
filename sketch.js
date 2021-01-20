var wall,car;
var speed,weight
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1350, 200, 60, height/2);
  car=createSprite(50,200,50,50)
  wall.shapeColor=(80,80,80);
  car.velocityX=3;
}

function draw() {
  
  background("red");
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));  
  if(car.isTouching(wall)&&0.5*weight*speed*speed/22500<=100){
    car.shapeColor="green";
  }
  if(car.isTouching(wall)&&0.5*weight*speed*speed/22500<=180&&0.5*weight*speed*speed/22500>100){
    car.shapeColor="yellow";
  }
  if(car.isTouching(wall)&&0.5*weight*speed*speed/22500>180){
    car.shapeColor="red";
  }
  console.log(speed)
  drawSprites();
}