export interface Vector {
  x: number;
  y: number;
}

export function addVecs(vec1: Vector, vec2: Vector): Vector {
  return {
    x: vec1.x + vec2.x,
    y: vec1.y + vec2.y
  };
}

export function subVecs(vec1: Vector, vec2: Vector): Vector {
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

export function getDistanceBetweenVecs(vec1: Vector, vec2: Vector) {
  const dx = vec1.x - vec2.x;
  const dy = vec1.y - vec2.y;

  return Math.sqrt(dx * dx + dy * dy);
}

export function dotVecs(vec1: Vector, vec2: Vector): number {
  return vec1.x * vec2.y + vec1.y * vec2.y;
}

export function getAngleBetweenVecs(vec1: Vector, vec2: Vector) {
  const vec1Len = getVecLength(vec1);
  const vec2Len = getVecLength(vec2);

  const dot = dotVecs(vec1, vec2);
  const theta = dot / (vec1Len * vec2Len);
  return radsToDegrees(Math.acos(theta));
}

export function radsToDegrees(rads: number) {
  return (rads * 180) / Math.PI;
}
