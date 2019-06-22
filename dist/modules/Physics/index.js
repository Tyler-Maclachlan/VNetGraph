"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function physicsStep(nodes, edges) {
    edges.forEach(function (edge) {
        edge.update();
    });
    nodes.forEach(function (node) {
        node.update();
    });
    return {
        nodes: nodes,
        edges: edges
    };
}
exports.physicsStep = physicsStep;
