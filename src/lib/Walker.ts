import p5 from "p5";

export class Walker {
    private p: p5;
    public x: number;
    public y: number;

    constructor(p: p5, x = 0, y = 0) {
        this.p = p;
        this.x = x;
        this.y = y;
    }

    init() {
    this.x = this.p.width / 2;
    this.y = this.p.height / 2;
  }
  step() {
    this.x += this.p.random(-2.75, 3);
    this.y += this.p.random(-2.75, 3);
  }
  draw() {
    this.p.stroke(0);
    this.p.point(this.x, this.y);
  }
}


