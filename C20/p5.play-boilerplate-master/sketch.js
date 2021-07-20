var movingrect, fixedrect


function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(400,300,50,50);

}

function draw() {
  background(0);  
  rect1.y = mouseY
  rect1.x = mouseX
  
    isTouching(rect1, rect2)

  drawSprites();
}

