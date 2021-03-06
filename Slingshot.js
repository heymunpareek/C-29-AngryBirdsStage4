class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        this.s1 = loadImage("sprites/sling1.png");
        this.s2 = loadImage("sprites/sling2.png");
        this.s3 = loadImage("sprites/sling3.png");
        
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.s1, 200, 20);
        image(this.s2, 170, 20);


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(79, 46, 20)
            if(pointA.x < 220) {
                strokeWeight(4);
                line(pointA.x -25, pointA.y, pointB.x- 10, pointB.y);
                line(pointA.x - 25, pointA.y, pointB.x + 30, pointB.y - 3)
                image(this.s3, pointA.x - 30, pointA.y- 10, 15, 30)
            }

            else {
                strokeWeight(4);
                line(pointA.x +25, pointA.y, pointB.x- 10, pointB.y);
                line(pointA.x +25, pointA.y, pointB.x + 30, pointB.y - 3)
                image(this.s3, pointA.x + 25, pointA.y- 10, 15, 30)
            }
            
        }
    }
    
}