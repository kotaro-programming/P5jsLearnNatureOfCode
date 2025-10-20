import p5 from "p5";

export default function sketch(p: p5) {

    let t = 0.0;

    p.setup = () => {
        p.createCanvas(640,240);
        p.background(255);

    }

    p.draw = () => {
        p.background(255);
        let xoff = t;
        p.noFill();
        p.stroke(0);
        p.strokeWeight(2);
        p.beginShape();
        for(let i = 0; i < innerWidth; i++) {
            let y = p.noise(xoff) * innerHeight;
            xoff += 0.01;
            p.vertex(i,y);
        }
        p.endShape();
        t += 0.01;

    }
}