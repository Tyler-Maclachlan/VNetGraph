import { Vector, addVecs, multiplyVecByScalar } from '../../../utils';

export default class Node2D {
  public accelleration: Vector;
  public velocity: Vector;
  public mass: number;
  public position: Vector;

  constructor(mass: number, position: Vector) {
    this.mass = mass;
    this.position = position;

    this.accelleration = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
  }

  public update() {
    this.velocity = addVecs(this.velocity, this.accelleration);
    this.position = addVecs(this.position, this.velocity);

    this.velocity = multiplyVecByScalar(this.velocity, 0.7);
    this.accelleration = multiplyVecByScalar(this.accelleration, 0.3);
  }
}
