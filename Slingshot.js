class SlingShot{
    constructor(bodyA,pointB){
         var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.045,
            length:45
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            push();
            var pos1 = this.sling.bodyA.position;
            var pos2 = this.pointB;
            strokeWeight(5);
            line(pos1.x,pos1.y,pos2.x,pos2.y);
            pop();
        }
    }
}