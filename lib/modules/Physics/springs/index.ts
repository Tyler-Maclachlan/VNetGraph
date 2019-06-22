import Node2D from '../node2d';
import { getDistanceBetweenVecs, subVecs, normalizeVec } from '../../../utils';

const DAMPING: number = 0.03;

export default class Spring2D {
  public node1: Node2D;
  public node2: Node2D;
  public restDistance: number;
  public stiffness: number;

  constructor(
    node1: Node2D,
    node2: Node2D,
    restDistance: number,
    stiffness: number
  ) {
    this.node1 = node1;
    this.node2 = node2;
    this.restDistance = restDistance;
    this.stiffness = stiffness;
  }

  public update() {
    let xAbs = getDistanceBetweenVecs(this.node1.position, this.node2.position);

    xAbs = xAbs || 1;

    const norm1 = normalizeVec(
      subVecs(this.node2.position, this.node1.position)
    );
    const norm2 = normalizeVec(
      subVecs(this.node1.position, this.node2.position)
    );

    const v1 = subVecs(this.node1.velocity, this.node2.velocity);
    const v2 = subVecs(this.node2.velocity, this.node1.velocity);
    console.log(xAbs);

    const F1x =
      this.stiffness * (xAbs - this.restDistance) * (norm1.x / xAbs) -
      DAMPING * v1.x;
    const F1y =
      this.stiffness * (xAbs - this.restDistance) * (norm1.y / xAbs) -
      DAMPING * v1.y;

    const F2x =
      this.stiffness * (xAbs - this.restDistance) * (norm2.x / xAbs) -
      DAMPING * v2.x;
    const F2y =
      this.stiffness * (xAbs - this.restDistance) * (norm2.y / xAbs) -
      DAMPING * v2.y;

    console.log(F1x, F1y, F2x, F2y);

    this.node1.accelleration.x += F1x / this.node1.mass;
    this.node1.accelleration.y += F1y / this.node1.mass;

    this.node2.accelleration.x += F2x / this.node2.mass;
    this.node2.accelleration.y += F2y / this.node2.mass;
  }
}
