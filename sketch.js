const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground_object;
var base1, base2;
var block1, block2, block3, block4, block5, block6, block7, block8;
var block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18;
var block19, block20;
var block21, block22, block23, block24, block25;
var block26, block27, block28;
var block29, polygon, polygon_img, slingshot;

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
    //Canvas Setup
    createCanvas(1200,500);

    //Engine and World Setup
    engine = Engine.create();
    world = engine.world;

    //Ground
    ground_object = new Ground(0,600,2450,250);

    //1st Base
    base1 = new Ground(400,300,300,10);
    //2nd Base
    base2 = new Ground(850,200,200,10);

    //level 1: 1st Base
    block1 = new Block(295,275,30,40);
    block2 = new Block(325,275,30,40);
    block3 = new Block(355,275,30,40);
    block4 = new Block(385,275,30,40);
    block5 = new Block(415,275,30,40);
    block6 = new Block(445,275,30,40);
    block7 = new Block(475,275,30,40);
    block8 = new Block(505,275,30,40);

    //level 2: 1st Base
    block9 = new Block(325,235,30,40);
    block10 = new Block(355,235,30,40);
    block11 = new Block(385,235,30,40);
    block12 = new Block(415,235,30,40);
    block13 = new Block(445,235,30,40);
    block14 = new Block(475,235,30,40);

    //level 3: 1st Base
    block15 = new Block(355,195,30,40);
    block16 = new Block(385,195,30,40);
    block17 = new Block(415,195,30,40);
    block18 = new Block(445,195,30,40);

    //top: 1st Base
    block19 = new Block(385,155,30,40);
    block20 = new Block(415,155,30,40);

    //level 1: 2nd Base
    block21 = new Block(850-60,200-25,30,40);
    block22 = new Block((850-60)+30,200-25,30,40);
    block23 = new Block((850-60)+30+30,200-25,30,40);
    block24 = new Block((850-60)+30+30+30,200-25,30,40);
    block25 = new Block((850-60)+30+30+30+30,200-25,30,40);

    //level 2: 2nd Base
    block26 = new Block((850-60)+30,(200-25)-40,30,40);
    block27 = new Block((850-60)+30+30,(200-25)-40,30,40);
    block28 = new Block((850-60)+30+30+30,(200-25)-40,30,40);

    //top: 2nd Base
    block29 = new Block((850-60)+30+30,(200-25)-40-40,30,40);

    //polygon holder with slings
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{
        x:100,
        y:200
    });
}

function draw(){
    //Background Setup
    background(60,46,46);

    //Updating Engine
    Engine.update(engine);

    //Displaying Sprites
    drawSprites();

    //Text Setup and Text Functionality
    textSize(16);
    fill(212,204,175);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",350,20);

    //Displaying Ground
    ground_object.display();

    //Displaying 1st and 2nd Base
    base1.display();
    base2.display();

    //Displaying level 1 of 1st Base & level 1 of 2nd Base
    fill(103,209,234);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    //Displaying level 2 of 1st Base & top of 2nd Base
    fill(255,190,196);
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block29.display();

    //Displaying level 3 of 1st Base & level 2 of 2nd Base
    fill(0,228,208);
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block26.display();
    block27.display();
    block28.display();

    //Displaying top of 1st Base
    fill(128,125,120);
    block19.display();
    block20.display();

    //Displaying Polygon & slings
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();
}

//Event occuring while Mouse is Dragged
function mouseDragged(){
    Body.setPosition(this.polygon,{
        x:mouseX,
        y:mouseY
    });
}

//Event occuring when Mouse is Relased
function mouseReleased(){
    slingshot.fly();
}

//Function to specify certain Event to occur when a key is Pressed
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon);
    }
}