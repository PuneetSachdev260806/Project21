function setup() {
  createCanvas(1600,400);
 bullet =createSprite(50, 200, 50, 50);
 wall =createSprite1(1200,200,thickness,height/2);
 speed = random(223,321);
 weight = random(30,52);
 thickness = random(22,83);
}

var bullet, wall;
var speed, weight, thickness;


function draw() {
  background(255,255,255);
  
  bullet.velocityX=speed;

  wall.shapeColor = color(80,80,80);

  if (hasCollided(bullet, wall))
   {
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

      if (damage>10)
      {
           wall.shapeColor = (255,0,0);
      }

      if (damage<10)
      {
           wall.shapeColor = (0,255,0);
      }


   }



  drawSprites();
}

function hasCollided( lbullet, lwall)
  {
     bulletRightEdge = bullet.x + bullet.width;
     wallLeftEdge = wall.x;
     if (bulletRightEdge>=wallLeftEdge);
      {
        return true;
      }
        return false;

  }