import Node2D from "../node2d";
import {
  getDistanceBetweenVectors,
  getAngleBetweenVectors,
  normalizeVec
} from "../../../utils";

export const GRAVITY = 6.67428 * Math.pow(10, -11);

export default class Attraction2D {
  public node1: Node2D;
  public node2: Node2D;
  public gravity: number;

  constructor(node1: Node2D, node2: Node2D, gravity: number = GRAVITY) {
    this.node1 = node1;
    this.node2 = node2;
    this.gravity = gravity;
  }

  public update() {
    //console.log("pos1", this.node1.position);
    //console.log("pos2", this.node2.position);
    const absX =
      getDistanceBetweenVectors(this.node1.position, this.node2.position) || 1;

    const F =
      this.gravity * ((this.node1.mass * this.node2.mass) / (absX * absX));

    const angle = getAngleBetweenVectors(
      this.node1.position,
      this.node2.position
    );

    //console.log("angle", angle);

    const f1 = normalizeVec({
      x: -F * Math.cos(angle),
      y: -F * Math.sin(angle)
    });
    const f2 = normalizeVec({ x: F * Math.cos(angle), y: F * Math.sin(angle) });

    //console.log("f1", f1);
    //console.log("f2", f2);

    this.node1.acceleration.x += f1.x / this.node1.mass;
    this.node1.acceleration.y += f1.y / this.node1.mass;

    this.node2.acceleration.x += f2.x / this.node2.mass;
    this.node2.acceleration.y += f2.x / this.node2.mass;
  }
}
