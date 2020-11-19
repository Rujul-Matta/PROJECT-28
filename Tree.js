class tree{
    constructor(x, y){
        var features = {
            isStatic: true,
            restitution: 0,
            friction : 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,features);
        this.width = 500;
        this.height = 525;
        this.image = loadImage("Tree.png");
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