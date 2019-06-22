"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
function createLine(context, edge) {
    var len = utils_1.getDistanceBetweenVectors(edge.node1.position, edge.node2.position);
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = 'blue';
    context.moveTo(edge.node1.position.x, edge.node1.position.y);
    context.lineTo(edge.node2.position.x, edge.node2.position.y);
    context.stroke();
}
function createCircle(context, node, radius) {
    if (radius === void 0) { radius = 10; }
    context.beginPath();
    context.arc(node.position.x, node.position.y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#252525';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#252525';
    context.stroke();
}
function createCanvas(container) {
    var canvas = document.createElement('canvas');
    var width = container.clientWidth;
    var height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;
    container.appendChild(canvas);
    return canvas;
}
exports.createCanvas = createCanvas;
function render(canvas, nodes, edges) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    edges.forEach(function (edge) {
        createLine(ctx, edge);
    });
    nodes.forEach(function (node) {
        createCircle(ctx, node, 20);
    });
}
exports.render = render;
