"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Physics_1 = require("./modules/Physics");
var Renderer_1 = require("./modules/Renderer");
var VNetGraph = /** @class */ (function () {
    function VNetGraph(container, nodes, edges, options) {
        this.container = container;
        this.graphNodes = new Map(nodes);
        this.graphEdges = new Map(edges);
        this.canvas = Renderer_1.createCanvas(container);
        this.physicsObjects = this.createPhysicsObjects(nodes, edges);
        requestAnimationFrame(this.mainLoop);
    }
    VNetGraph.prototype.createPhysicsObjects = function (nodes, edges) {
        var physicsObjects = {
            nodes: new Map(),
            edges: new Map()
        };
        var springLen = edges.length;
        var nodeLen = nodes.length;
        for (var i = 0; i < springLen; i++) {
            physicsObjects.edges.set(i + '', edges[i]);
        }
        for (var i = 0; i < nodeLen; i++) {
            physicsObjects.nodes.set(i + '', nodes[i]);
        }
        return physicsObjects;
    };
    VNetGraph.prototype.mainLoop = function () {
        Physics_1.physicsStep(this.physicsObjects.nodes, this.physicsObjects.edges);
        Renderer_1.render(this.canvas, this.graphNodes, this.graphEdges);
        requestAnimationFrame(this.mainLoop);
    };
    return VNetGraph;
}());
if (!window.VNetGraph) {
    window.VNetGraph = VNetGraph;
}
exports.default = VNetGraph;
