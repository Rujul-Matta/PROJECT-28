class ground{
    constructor(){
        var features = {
            isStatic: true,
            restitution: 0,
            friction : 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(width/2,890,10,10,features);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}