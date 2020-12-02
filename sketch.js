//Create variables here
var dog,doghappy,database,food,dogimage,doghappyimage,foodStock,lastStock;
function preload()
{
  //load images here
  dogimage=loadImage("Dog.png");
  
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database;

  dog=createSprite(200,200,10,10)
  dog.addImage(dogimage)
  dog.scale=0.2;
  
  food=database.ref("food")
  food.on("value",readStock)

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);
}


function draw() {  
background("black")
fill(255,255,254);
textSize(15)
if(lastFed>=12){
  text("last Feed : "+lastFed%12+ "pm",350,30)
}else if (lastFed===0){
  text("last Feed :  12Am",350,30)
}else{
  text("last Feed : "+lastFed+ "Am",350,30)

}
if (gameState!=="hungry"){
  feed.hide();
  addFood.hide();
  dog.remove();
}else{
  feed.show();
  addFood.show();
  dog.addImage(sadDog);
}

  drawSprites();
  //add styles here

}
function readStock(){
  food=data.val();
}

function writeStoke(x){

  database.ref('/').update({
    food:x
  })
}


