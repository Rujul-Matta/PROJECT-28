class Mango{
    constructor(x, y){
        var options = {
            isStatic: true,
            restituiton: 0,
            friction:1,
        }
        this.body = Bodies.rectangle(x,y,75,75, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}