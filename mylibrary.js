function isTouching(p1, p2) {
    if(p1.x - p2.x < p2.width/2 + p1.width / 2 &&
      p2.x - p1.x < p2.width/2 + p1.width / 2 &&
      p1.y- p2.y < p2.height/2+ p1. height/ 2 &&
      p2.y - p1.y < p2.height/2+ p1. height/2) {
      return true;
  }
  else {
      return false;
  }
  }
  
  
  function bounceoff(b1,b2) {
    if (b1.x -b2.x < b1.width/2 + b2.width/2
      && b2.x - b1.x < b2.width/2 + b1.width/2) {
    b1.velocityX = b1.velocityX * (-1);
    b2.velocityX = b2.velocityX * (-1);
  }
  if (b1.y - b2.y < b2.height/2 + b1.height/2
    && b2.y - b1.y < b2.height/2 + b1.height/2){
    b1.velocityY = b1.velocityY * (-1);
    b2.velocityY = b2.velocityY * (-1);
  }
  
  
  }
  