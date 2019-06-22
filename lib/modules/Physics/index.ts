import Node2D from "./node2d";
import Spring2D from "./springs";
import Attraction2D from "./attraction";

export function physicsStep(
  nodes: Map<string, Node2D>,
  edges: Map<string, Spring2D>,
  attractions: Map<string, Attraction2D>
) {
  console.time("attr");
  attractions.forEach(attr => {
    attr.update();
  });
  console.timeEnd("attr");

  console.time("springs");
  edges.forEach(edge => {
    edge.update();
  });
  console.timeEnd("springs");

  console.time("nodes");
  nodes.forEach(node => {
    node.update();
  });
  console.timeEnd("nodes");
}

export * from "./attraction";
export * from "./node2d";
export * from "./springs";
