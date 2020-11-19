class boy{
    constructor(){
        var features = {
            isStatic: true,
            restitution: 0,
            friction : 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(200,475,width,height,features);
        this.width = 200;
        this.height = 425;
        this.image = loadImage("boy.png");
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