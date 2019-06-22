"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../../utils");
var Node2D = /** @class */ (function () {
    function Node2D(mass, position) {
        this.mass = mass;
        this.position = position;
        this.acceleration = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
    }
    Node2D.prototype.update = function () {
        this.velocity = utils_1.addVectors(this.velocity, this.acceleration);
        this.position = utils_1.addVectors(this.position, this.velocity);
        this.velocity = utils_1.multiplyVecByScalar(this.velocity, 0.9);
        this.acceleration = utils_1.multiplyVecByScalar(this.acceleration, 0.3);
    };
    return Node2D;
}());
exports.default = Node2D;
