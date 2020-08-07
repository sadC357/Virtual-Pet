var dog, happyDog;
var database;
var foodS,foodStock;

function preload(){
  dogIMG=loadImage("dogImg1.png");
  happyDogIMG=loadImage("dogImg.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogIMG);
  dog.scale=0.3;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}

function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }
  drawSprites();
  fill("black");
  textSize(25);
  text("Food Remaining:"+foodS,170,100);
}

function readStock(data) {
  foodS=data.val();
}

function writeStock(x) {
  if (x<=0) {
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}