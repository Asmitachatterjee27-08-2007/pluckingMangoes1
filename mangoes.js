class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
            

        }
        this.radius=20;
        this.body=Bodies.circle(x,y,this.radius,options);
        this.image=loadImage("Plucking mangoes/mango.png");
         World.add(world,this.body);
    

    }

    display(){
        var pos=this.body.position;
        push()
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,this.radius+30,this.radius+30);
            pop();
    }
}