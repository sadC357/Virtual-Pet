var dog, happyDog;
var database;
var foodS,foodStock;


function preload(){
  dogIMG=loadImage("images/dogImg1.png");
  happyDogIMG=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  foodStock=database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }
  drawSprites();
}

function readStock(data) {
  foodS=data.val();
}

function writeStock() {
  database.ref('/').update({
    food:x
  })
}