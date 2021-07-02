var bgImg;
var iss;
var hasDocked = false;
var spaceCraft, spaceCraft1Img, spaceCraft2Img, spaceCraft3Img, spaceCraft4Img;

function preload(){
  bgImg = loadImage("docking-undocking/spacebg.jpg");
  issImg = loadImage("docking-undocking/iss.png");
  spaceCraft1Img = loadImage("docking-undocking/spacecraft1.png");
  spaceCraft2Img = loadImage("docking-undocking/spacecraft2.png");
  spaceCraft3Img = loadImage("docking-undocking/spacecraft3.png");
  spaceCraft4Img = loadImage("docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(600,350);
  spaceCraft = createSprite(285, 240, 100, 100);
  spaceCraft.addImage("static",spaceCraft1Img);
  spaceCraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage("iss",issImg);
  iss.scale = 0.25;
}

function draw() {
  background(bgImg); 

  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-1,1);

    if(keyDown("up")){
      spaceCraft.y-=2;
    }

    if(keyDown("left")){
      spaceCraft.x-=1;
      spaceCraft.addImage("leftspace", spaceCraft4Img);
    }

    if(keyDown("right")){
      spaceCraft.x+=1;
      spaceCraft.addImage("rightspace", spaceCraft3Img);
    }

    if(keyDown("down")){
      spaceCraft.addImage("downspace", spaceCraft2Img);
    }
  }

  if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("DOCKING SUCCESSFUL",200,300);
  }

  drawSprites();
}