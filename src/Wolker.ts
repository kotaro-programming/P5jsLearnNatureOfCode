import p5 from "p5"

export class Walker {
    private p: p5;
    private x: number;
    private y: number;

    constructor(p: p5) {
        this.p = p;
        this.x = p.width / 2;
        this.y = p.height / 2;
    }

    show() {
        this.p.stroke(0);
        this.p.point(this.x, this.y);
    }

    step(){
        const xstep = this.p.random(-2.75, 3);
        const ystep = this.p.random(-2.75, 3);
        this.x += xstep;
        this.y += ystep;
    }
}