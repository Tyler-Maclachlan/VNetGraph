export interface Vector {
  x: number;
  y: number;
}

export function addVectors(vec1: Vector, vec2: Vector): Vector {
  return {
    x: vec1.x + vec2.x,
    y: vec1.y + vec2.y
  };
}

export function subVectors(vec1: Vector, vec2: Vector): Vector {
  return {
    x: vec1.x - vec2.x,
    y: vec1.y - vec2.y
  };
}

export function multiplyVecByScalar(vec: Vector, scalar: number): Vector {
  return {
    x: vec.x * scalar,
    y: vec.y * scalar
  };
}

export function divideVecByScalar(vec: Vector, scalar: number): Vector {
  if (scalar) {
    return {
      x: vec.x / scalar,
      y: vec.y / scalar
    };
  } else {
    return {
      x: vec.x,
      y: vec.y
    };
  }
}

export function getVecLength(vec: Vector): number {
  return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
}

export function normalizeVec(vec: Vector): Vector {
  return divideVecByScalar(vec, getVecLength(vec));
}

export function getDistanceBetweenVectors(vec1: Vector, vec2: Vector) {
  const dx = vec1.x - vec2.x;
  const dy = vec1.y - vec2.y;

  return Math.sqrt(dx * dx + dy * dy);
}

export function dotVectors(vec1: Vector, vec2: Vector): number {
  return vec1.x * vec2.y + vec1.y * vec2.y;
}

export function isVecZero(vec: Vector) {
  return getVecLength(vec) < 0.0001;
}

export function getAngleBetweenVectors(vec1: Vector, vec2: Vector) {
  return (Math.atan2(vec2.y - vec1.y, vec2.x - vec1.x) * 180) / Math.PI;
}

export function radsToDegrees(rads: number) {
  return (rads * 180) / Math.PI;
}
