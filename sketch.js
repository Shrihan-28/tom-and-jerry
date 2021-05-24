var bgImg;
var cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1,mouseimg2,mouseimg3;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3 = loadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600,10,10);
    cat.addAnimation("catimg1",catimg1);
    cat.changeAnimation("catimg1")
    cat.scale=0.2;
    cat.debug = true;
    cat.setCollider("rectangle",0,0,700,700,0);


    mouse = createSprite(200,600,10,10);
    mouse.addAnimation("mouseimg1",mouseimg1);
    mouse.scale=0.2
    mouse.debug = true;
    mouse.setCollider("rectangle",0,0,700,700,0);


}

function draw() {

    background(bgImg);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        mouse.x = 100;
        mouse.addAnimation("mouseimg3",mouseimg3);
        mouse.changeAnimation("mouseimg3");
       

        cat.addAnimation("catimg3",catimg3);
        cat.changeAnimation("catimg3");
        
        cat.velocityX=0;
    }


    drawSprites();
}


function keyPressed(){

    if (keyDown(RIGHT_ARROW)){
        mouse.frameDelay = 25;
        mouse.addAnimation("mousetease",mouseimg2);
        mouse.changeAnimation("mousetease");
        mouse.frameDelay = 25;
        
    }

    if (keyDown(LEFT_ARROW)){
            cat.addAnimation("catimg2",catimg2);
            cat.changeAnimation("catimg2");
            cat.frameDelay = 25;
            cat.velocityX=-2;
    
        }
    


  //For moving and changing animation write code here




}
