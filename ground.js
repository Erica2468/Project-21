class Ground {
    display()
    this.body = Bodies.rectangle (x,y,w,h);
    this.w = w;
    this.h = h;
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
}
    show()
    var pos = this.body.position
    push();
    fill(127)
    rectMode(CENTER)
    rect(pos.x, pos.y, this.w, this.h);
    pop();
