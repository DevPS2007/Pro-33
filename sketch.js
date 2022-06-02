var back,back_img;
var snowflakes,snowflakes_img;

function preload(){
  back_img=loadImage("snow3.jpg");
  snowflakes_img=loadImage("snow5.webp");
}

function setup() {
  createCanvas(900,550);

  back = createSprite(1000/2,550/2,1100,550);
  back.addImage("background",back_img);

}

function draw(){
  background("black");
  if(frameCount%5==0){
    snowflakes = createSprite(random(0,900),0,10,10);
    snowflakes.addImage("snowflake",snowflakes_img);
    snowflakes.velocityY=random(3,6);
    snowflakes.scale=0.05;
  }
  drawSprites();
}