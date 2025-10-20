import type { Sketch } from "../types/sketch";
import WalkerSketch from "./WalkerSketch";
import RandomHistogram from "./RandomHistogram";
import Gaussin from "./Gaussin";

const registry = {
    walker: WalkerSketch,
    histogram: RandomHistogram,
    gaussin: Gaussin,
} satisfies Record<string, Sketch>;

export default registry;
export const listSketchKeys = () => Object.keys(registry);
