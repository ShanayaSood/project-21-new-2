var canvas;
var music;
var ball;
var surface;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(200,500,100,20)
     surface1.shapeColor="blue"
     surface2=createSprite(295,580,200,30)
     surface2.shapeColor="yellow"
     surfac3=createSprite(200,500,100,20)
     surface3.shapeColor="pink"
     surface4=createSprite(200,500,100,20)
     surface4.shapeColor="green"
    //create box sprite and give velocity
     ball=createSprite(random(20,750),100,40,40);
     ball.shapeColor=rbg(255,255,255);
     ball.velocitX=4;
     ball.velocitY=9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprite();
ball.bounceOff(edges);

//add condition to check if box touching surface and make it box
if(surface1.isTouching(ball)&& ball.bounceOff(surface1)){
    ball.shapeColor=rbg(0,0,255)
           music.play();
}
   if(surface2.isTouching(ball1)){
       ball.shapeColor=rbg(255,128,0);
       ball.velocitX=0;
       ball.velocitY=0;
            music .stop();
         }
         if(surface3.isTouching(ball)&& ball.bounceOff(surface3)){
            ball.shapeColor=rbg(153,0,76)
         }
         if(surface4.isTouching(ball)&& ball.bounceOff(surface4)){
            ball.shapeColor=rbg(0,100,0);
}


         drawSprite();

        

    if(surface1.isTouching(ball)&& ball.bounceOff(surface1)){
        ball.shapeColor=rbg(0,0,255)
               music.play();
    }
       if(surface2.isTouching(ball1)){}


}









