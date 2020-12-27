var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);

  ob1 = createSprite(300, 200, 50, 80);
  ob1.shapeColor = 'green'
  ob1.velocityX=-4

  
  fixedRect.shapeColor = 'green'
  fixedRect.velocityX=4
  
  movingRect.shapeColor = 'green'

  fixedRect.debug = true;
  movingRect.debug = true;
  ob1.debug = true;
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x - fixedRect.x)

  if ( isTouching(movingRect, fixedRect) ) {
    movingRect.shapeColor = 'blue'
    fixedRect.shapeColor = 'blue'
  }
  else if( isTouching(movingRect, ob1) ) {
    movingRect.shapeColor = 'yellow'
    ob1.shapeColor = 'yellow'
  }
  else {
    movingRect.shapeColor = 'green'
    fixedRect.shapeColor = 'green'
    ob1.shapeColor = 'green'
  }

bounceoff(ob1,fixedRect);  


 
  drawSprites();
}




