import p5 from "p5";
import { Walker } from "./Wolker";

new p5((p: p5) => {
  let walker : Walker;

  p.setup = () => {
    p.createCanvas(640, 240);
    walker = new Walker(p);
    p.background(255);
  };

  p.draw = () => {
    walker.step();
    walker.show();
  };
});