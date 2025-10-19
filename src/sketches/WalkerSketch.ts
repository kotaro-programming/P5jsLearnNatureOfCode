import p5 from "p5";
import { Walker } from "../lib/Walker";

export default function sketch(p: p5) {
    let w: Walker;

    p.setup = () => {
        p.createCanvas(640, 240);
        w = new Walker(p);
        w.init();
        p.background(255);
    };

    p.draw = () => {
        w.step();
        w.draw();
    };
}


