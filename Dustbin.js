class Dustbin
{
    constructor(x,y,w,h)
    {
        var box={
            isStatic:true,
            restitution:0,
            density:1,
            friction:0.3
        }
        this.body= Bodies.rectangle(x,y,w,h,box);
        this.width=w;
        this.height=h;
        World.add (world,this.body); 
    }
    display()
    {
        var position=this.body.position;

        push ();
        translate (position.x,position.y)
        rectMode(CENTER);
        fill("white");
        rect (0,0,this.width,this.height);
        pop ();
    }
}