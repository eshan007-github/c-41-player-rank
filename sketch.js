var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var gold ,silver ,bronze
var form, player, game;

var cars, car1, car2, car3, car4;
var car1_img
  var car2_img
   var car3_img
  var car4_img
var gnd,track


function preload(){

  gnd = loadImage("images/ground.png");
    track = loadImage("images/track.jpg");
     car1_img = loadImage("images/car1.png");
      car2_img = loadImage("images/car2.png");
    car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  gold =  loadImage("gold.png")
  silver =  loadImage("silver.png")
  bronze =  loadImage("bronze.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
   database = firebase.database();
    game = new Game();
   game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end()
  }
}
