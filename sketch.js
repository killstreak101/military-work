var wall,thickness;

var bullet,bullet1,speed,weight

function preload(){

bullet1 = loadAnimation("bullet.png")

}



function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor="green";
  bullet.velocityX = speed;
  bullet.scale=0.2;
  bullet.debug = true;
 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "white";
  wall.setCollider("circle",0,0,40);


  //bullet.setColllider("circle",0,0,40);

}

function draw() {
  background("black"); 
  
 if (hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if (damage>10){
    wall.shapeColor = color(255,0,0);

  }

  if (damage<10){
    wall.shapeColor = color(0,255,0);
  }

 }


  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}