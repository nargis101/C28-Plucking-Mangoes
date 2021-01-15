class Connector{
    constructor(body, pointB){
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.003,
            length: 1
        }

        this.connector = Constraint.create(options);
        this.bodyA = body;
        this.pointB = pointB;
        World.add(world, this.connector);
    }

    fly(){
        this.connector.bodyA = null;
    }

    attach(body){
        this.connector.bodyA = body;
    }

    display(){
        if(this.connector.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}