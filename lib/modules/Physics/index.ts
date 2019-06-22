import Node2D from './node2d';
import Spring2D from './springs';

export function physicsStep(
  nodes: Map<string, Node2D>,
  edges: Map<string, Spring2D>
) {
  edges.forEach(edge => {
    edge.update();
  });

  nodes.forEach(node => {
    node.update();
  });
}
