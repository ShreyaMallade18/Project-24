class Dustbin{
    constructer(x,y,width,height){
        var options = {
            isStatic:true,
            'restitution':0,
            'friction' :0,
            'density':0.1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);

        fill(255);

        rect(this.body.positionx.x, this.body.position.y, this.width, this.height)

    }
}