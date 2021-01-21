class Mango{
    constructor(x,y,diametre){
        var options={
            isStatic:true,
            'restituion':0.5,
            'friction': 1.0,
        }
        this.body=Bodies.circle(x,y,diametre,options);
        this.diametre=diametre;
        this.image=loadImage("images/img/mango.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);

        var mango=createSprite(0,0,this.diametre,this.diametre);
        mango.addImage(this.image);
        mango.scale=0.22;
        pop();
    }
}
