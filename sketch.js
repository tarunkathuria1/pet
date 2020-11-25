//Create variables here
var dog,doghappy,database,food,dogimage,doghappyimage;
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
}


function draw() {  
background("black")
  drawSprites();
  //add styles here

}
function readStock(data){
  food=data.val();
}


