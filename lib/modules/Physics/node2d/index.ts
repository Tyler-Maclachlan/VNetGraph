import {
  Vector,
  addVectors,
  multiplyVecByScalar,
  isVecZero
} from "../../../utils";

export default class Node2D {
  public acceleration: Vector;
  public velocity: Vector;
  public mass: number;
  public position: Vector;

  constructor(mass: number, position: Vector) {
    this.mass = mass;
    this.position = position;

    this.acceleration = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
  }

  public update() {
    this.velocity = addVectors(this.velocity, this.acceleration);
    if (!isVecZero(this.velocity)) {
      this.position = addVectors(this.position, this.velocity);
    }

    this.velocity = multiplyVecByScalar(this.velocity, 0.7);
    this.acceleration = multiplyVecByScalar(this.acceleration, 0.3);
  }
}
