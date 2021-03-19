class Block {
  constructor(x, y, width, height) {
    var options = {
        /*'restitution':0.8,
        'friction':1,
        'density':1.5*/
        restitution:0.04,
        friction:0.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("block.png");
    this.visibility = 255;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      strokeWeight(2);
      //stroke("orange");
      translate(pos.x,pos.y);
      rotate(angle);
      //rectMode(CENTER);
      //fill(255);
      //rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();
    }
  }
};
