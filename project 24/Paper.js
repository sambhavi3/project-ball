class Paper {
  constructor(x, y, r) {
    var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world, this.body);
    this.body = Bodies.circle(this.x, this.y, this.r/2, options);
  }
  display(){
    var paperpos =this.body.position;
  
    push();
    translate(paperpos.x, paperpos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("255,0,255");
    fill(255);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
};
