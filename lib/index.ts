import Node2D from './modules/Physics/node2d';
import Spring2D from './modules/Physics/springs';
import { physicsStep } from './modules/Physics';
import { createCanvas, render } from './modules/Renderer';
import { InputNode, InputEdge } from './types';
import { Vector } from './utils';

class VNetGraph {
  public container: HTMLElement;
  public graphNodes: Map<any, any>;
  public graphEdges: Map<any, any>;
  public options: any;
  private canvas: HTMLCanvasElement;
  private numLoops = 0;

  constructor(
    container: HTMLElement,
    nodes: InputNode[],
    edges: InputEdge[],
    options?: any
  ) {
    this.container = container;
    const nodeLen = nodes.length;
    const edgeLen = edges.length;

    this.graphEdges = new Map();
    this.graphNodes = new Map();

    for (let i = 0; i < nodeLen; i++) {
      const pos = {
        x: Math.random() * container.clientWidth,
        y: Math.random() * container.clientHeight
      };
      this.graphNodes.set(nodes[i].id, new Node2D(1, pos));
    }

    for (let i = 0; i < edgeLen; i++) {
      this.graphEdges.set(
        i,
        new Spring2D(
          this.graphNodes.get(edges[i].source),
          this.graphNodes.get(edges[i].target),
          150,
          20
        )
      );
    }

    this.canvas = createCanvas(container);
    requestAnimationFrame(() => {
      this.mainLoop();
    });
  }

  public mainLoop() {
    console.log('step');
    requestAnimationFrame(() => {
      this.mainLoop();
    });
    physicsStep(this.graphNodes, this.graphEdges);
    render(this.canvas.getContext('2d')!, this.graphNodes, this.graphEdges);
    this.numLoops++;
  }
}

if (!(window as any).VNetGraph) {
  (window as any).VNetGraph = VNetGraph;
}

export default VNetGraph;
