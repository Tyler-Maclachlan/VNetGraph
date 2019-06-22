"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../../utils");
var Node2D = /** @class */ (function () {
    function Node2D(mass, position) {
        this.mass = mass;
        this.position = position;
        this.accelleration = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
    }
    Node2D.prototype.update = function () {
        this.velocity = utils_1.addVecs(this.velocity, this.accelleration);
        this.position = utils_1.addVecs(this.position, this.velocity);
        this.velocity = utils_1.multiplyVecByScalar(this.velocity, 0.9);
        this.accelleration = utils_1.multiplyVecByScalar(this.accelleration, 0.3);
    };
    return Node2D;
}());
exports.default = Node2D;
