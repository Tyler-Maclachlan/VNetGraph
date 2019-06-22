import Spring2D from "../Physics/springs";
import { getDistanceBetweenVectors } from "../../utils";
import Node2D from "../Physics/node2d";

function createLine(context: CanvasRenderingContext2D, edge: Spring2D) {
  context.beginPath();
  context.lineWidth = 2;
  context.strokeStyle = "blue";
  context.moveTo(edge.node1.position.x, edge.node1.position.y);
  context.lineTo(edge.node2.position.x, edge.node2.position.y);
  context.stroke();
}

function createCircle(
  context: CanvasRenderingContext2D,
  node: Node2D,
  radius: number = 20
) {
  context.beginPath();
  context.arc(node.position.x, node.position.y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "#252525";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "#252525";
  context.stroke();
}

export function createCanvas(container: HTMLElement) {
  const canvas = document.createElement("canvas");

  const width = container.clientWidth;
  const height = container.clientHeight;

  canvas.width = width;
  canvas.height = height;

  container.appendChild(canvas);
  return canvas;
}

export function render(
  ctx: CanvasRenderingContext2D,
  nodes: Map<string, Node2D>,
  edges: Map<string, Spring2D>
) {
  ctx!.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  edges.forEach((edge, key) => {
    createLine(ctx, edge);
  });

  nodes.forEach(node => {
    createCircle(ctx, node, 20);
  });
}
