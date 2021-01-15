class Stone{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
    
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.image = loadImage("stone.png");
    World.add(world, this.body);

    }

    display(){
        var stonePos = this.body.position;
        push();
        translate(stonePos.x, stonePos.y);
        imageMode(CENTER);
        //ellipseMode(RADIUS);
        image(this.image, 0, 0, 60, 60);
        pop();
    }
}