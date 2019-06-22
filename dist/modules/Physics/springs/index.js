"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../../utils");
var DAMPING = 0.3;
var Spring2D = /** @class */ (function () {
    function Spring2D(node1, node2, restDistance, stiffness) {
        this.node1 = node1;
        this.node2 = node2;
        this.restDistance = restDistance;
        this.stiffness = stiffness;
    }
    Spring2D.prototype.update = function () {
        var xAbs = utils_1.getDistanceBetweenVectors(this.node1.position, this.node2.position);
        var norm1 = utils_1.normalizeVec(utils_1.subVectors(this.node2.position, this.node1.position));
        var norm2 = utils_1.normalizeVec(utils_1.subVectors(this.node1.position, this.node2.position));
        var v1 = utils_1.subVectors(this.node1.velocity, this.node2.velocity);
        var v2 = utils_1.subVectors(this.node2.velocity, this.node1.velocity);
        var F1x = -this.stiffness * (xAbs - this.restDistance) * (norm1.x / xAbs) -
            DAMPING * v1.x;
        var F1y = -this.stiffness * (xAbs - this.restDistance) * (norm1.y / xAbs) -
            DAMPING * v1.y;
        var F2x = -this.stiffness * (xAbs - this.restDistance) * (norm2.x / xAbs) -
            DAMPING * v2.x;
        var F2y = -this.stiffness * (xAbs - this.restDistance) * (norm2.y / xAbs) -
            DAMPING * v2.y;
        this.node1.acceleration.x += F1x / this.node1.mass;
        this.node1.acceleration.y += F1y / this.node1.mass;
        this.node2.acceleration.x += F2x / this.node2.mass;
        this.node2.acceleration.y += F2y / this.node2.mass;
    };
    return Spring2D;
}());
exports.default = Spring2D;
