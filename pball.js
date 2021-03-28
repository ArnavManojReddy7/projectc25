class pball
{
	constructor(x,y,radius)
	{
		this.x=x;
		this.y=y;
		this.pballWidth=10;
		this.pballradius=4;
		
		this.image=loadImage("paper.png")
	
		
		

	}
	display()
	{
            Matter.Body.applyForce();

			

			push()
			translate(posLeft.x, posLeft.y);
			cricleMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			cricle(0,0,this.thickness, this.radiud);
			pop()
	}
	

}