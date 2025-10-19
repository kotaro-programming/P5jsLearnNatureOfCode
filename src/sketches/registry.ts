import type { Sketch } from "../types/sketch";
import WalkerSketch from "./WalkerSketch";
import RandomHistogram from "./RandomHistogram";

const registry = {
    walker: WalkerSketch,
    histogram: RandomHistogram,
} satisfies Record<string, Sketch>;

export default registry;
export const listSketchKeys = () => Object.keys(registry);
