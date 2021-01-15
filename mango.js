class Mango{
	constructor(x,y,r){
		var options={
			isStatic:true,
			restitution: 0,
            friction: 1,
			}
		this.x=x;
		this.y=y;
		this.r=30;
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(this.x, this.y, 30, options)
		World.add(world, this.body);
	}

	display(){
		var mangoPos = this.body.position;
		var angle = this.body.angle;	
		push();
		translate(mangoPos.x, mangoPos.y);
		rotate(angle);
		imageMode(CENTER);
		image(this.image, 0, 0, 70, 75);
		pop();
 }
}