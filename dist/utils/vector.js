"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addVectors(vec1, vec2) {
    return {
        x: vec1.x + vec2.x,
        y: vec1.y + vec2.y
    };
}
exports.addVectors = addVectors;
function subVectors(vec1, vec2) {
    return {
        x: vec1.x - vec2.x,
        y: vec1.y - vec2.y
    };
}
exports.subVectors = subVectors;
function multiplyVecByScalar(vec, scalar) {
    return {
        x: vec.x * scalar,
        y: vec.y * scalar
    };
}
exports.multiplyVecByScalar = multiplyVecByScalar;
function divideVecByScalar(vec, scalar) {
    if (scalar) {
        return {
            x: vec.x / scalar,
            y: vec.y / scalar
        };
    }
    else {
        return {
            x: vec.x,
            y: vec.y
        };
    }
}
exports.divideVecByScalar = divideVecByScalar;
function getVecLength(vec) {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
}
exports.getVecLength = getVecLength;
function normalizeVec(vec) {
    return divideVecByScalar(vec, getVecLength(vec));
}
exports.normalizeVec = normalizeVec;
function getDistanceBetweenVectors(vec1, vec2) {
    var dx = vec1.x - vec2.x;
    var dy = vec1.y - vec2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
exports.getDistanceBetweenVectors = getDistanceBetweenVectors;
function dotVectors(vec1, vec2) {
    return vec1.x * vec2.y + vec1.y * vec2.y;
}
exports.dotVectors = dotVectors;
function getAngleBetweenVectors(vec1, vec2) {
    var vec1Len = getVecLength(vec1);
    var vec2Len = getVecLength(vec2);
    var dot = dotVectors(vec1, vec2);
    var theta = dot / (vec1Len * vec2Len);
    return radsToDegrees(Math.acos(theta));
}
exports.getAngleBetweenVectors = getAngleBetweenVectors;
function radsToDegrees(rads) {
    return (rads * 180) / Math.PI;
}
exports.radsToDegrees = radsToDegrees;
