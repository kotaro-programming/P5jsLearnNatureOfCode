import p5 from "p5";
import registry, { listSketchKeys } from "./sketches/registry";

const params = new URLSearchParams(location.search);
const name = params.get("sketch") ?? listSketchKeys()[0];
const sketch = registry[name as keyof typeof registry];

if (!sketch) {
  document.body.innerHTML =
    `<div style="font-family:system-ui;padding:20px">
       <h2>Sketch not found: ${name}</h2>
       <p>Try: ${listSketchKeys().map(k=>`<code>?sketch=${k}</code>`).join(", ")}</p>
     </div>`;
} else {
  new p5(sketch);
}