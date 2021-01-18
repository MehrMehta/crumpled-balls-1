class Dustbin {
	constructor(x,y,w,h)
	{
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		//this.wallThickness=20;
		this.angle=0;	
		
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, {isStatic:true})
		
		World.add(world, this.body)
	

		
		

	}
	display()
	{
			var pos=this.body.position;
			

			

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.w, this.h);
			pop()

			//push()
			//translate(posRight.x, posRight.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			//stroke(255)
			//angleMode(RADIANS)
			//fill(255)
			//rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			//pop()

			//push()
			//translate(posBottom.x, posBottom.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			//stroke(255)
			//angleMode(RADIANS)
			//fill(255)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			//pop()
			
	}

}