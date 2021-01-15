class Tree{
    constructor(){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(1000, 300, 450, 500, options);
        this.width = 450;
        this.height = 500;
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}