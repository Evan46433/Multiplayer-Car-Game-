var canvas
var bgImage
var database
var form,player,game
var gameState
var playerCount
var backgroundImg
var car1,car2
var track
var car1Img,car2Img
var allPlayers
var fuelImg,powerCoinImg,fuels,powerCoins,obstacles,obstacle1Img,obstacle2Img,lifeImg,blastImg
var cars=[]
function preload(){
bgImage = loadImage("background.png")
car1Img = loadImage("assets/car1.png")
car2Img = loadImage("assets/car2.png")
track = loadImage("assets/track.jpg")
fuelImg = loadImage("assets/fuel.png")
powerCoinImg = loadImage("assets/goldCoin.png")
obstacle1Img = loadImage("assets/obstacle1.png")
obstacle2Img = loadImage("assets/obstacle2.png")
lifeImg = loadImage("assets/life.png")
blastImg = loadImage("assets/blast.png")
}

function setup(){
canvas = createCanvas(windowWidth,windowHeight) 
backgroundImg = bgImage
database = firebase.database()
game = new Game()
game.getState()
game.start()
}

function draw(){
background(backgroundImg)
if(playerCount === 2){
 game.update(1)
 }
 if(gameState === 1){
   game.play()
 }
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight)
}