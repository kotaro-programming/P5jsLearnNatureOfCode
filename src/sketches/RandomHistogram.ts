import p5 from "p5";

export default function sketch(p: p5) {
    const total = 20;
    let counts: number[] = [];

    p.setup = () => {
        p.createCanvas(640, 240);
        counts = Array.from({ length: total }, () => 0);
    };

    p.draw = () => {
        const i = p.floor(p.random(counts.length));
        counts[i]++;
        p.background(255);
        p.stroke(0);
        p.fill(127);
        const w = p.width / counts.length;
        for(let x = 0; x < counts.length; x++) {
            p.rect(x * w, p.height - counts[x], w - 1, counts[x]);
        }
    };
}