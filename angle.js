class Angle{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,20,100,option);
        this.x= x;
        this.y =y;
        World.add(world,this.body);
    }
    display(){
        translate(20/2, 100/2);
        angleMode(RADIANS);
        rotate(-PI/7.0);
        fill("green");
        rect(this.x,this.y,20,100);
    }
}