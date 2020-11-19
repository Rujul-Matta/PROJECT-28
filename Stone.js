class stone{
    constructor(x, y){
        var features = {
            isStatic: false,
            restitution: 0,
            friction : 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,25,25,features);
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;

        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display(){
        push();
        var pos =this.body.position
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}