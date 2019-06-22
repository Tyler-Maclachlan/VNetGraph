import Node2D from "./modules/Physics/node2d";
import Spring2D from "./modules/Physics/springs";
import { physicsStep } from "./modules/Physics";
import { createCanvas, render } from "./modules/Renderer";
import { InputNode, InputEdge } from "./types";
import { Vector } from "./utils";
import { getMousePosition } from "./modules/Interactions";
import Attraction2D from "./modules/Physics/attraction";

class VNetGraph {
  public container: HTMLElement;
  public graphNodes: Map<any, Node2D>;
  public graphEdges: Map<any, Spring2D>;
  private graphAttractions: Map<any, Attraction2D>;
  public options: any;
  private canvas: HTMLCanvasElement;
  private numLoops = 0;
  private mousePos: Vector = { x: 0, y: 0 };

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
    this.graphAttractions = new Map();

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
          this.graphNodes.get(edges[i].source)!,
          this.graphNodes.get(edges[i].target)!,
          150,
          20
        )
      );
    }

    for (let i = 0; i < nodeLen; i++) {
      for (let c = i + 1; c < nodeLen; c++) {
        this.graphAttractions.set(
          i + "-" + c,
          new Attraction2D(
            this.graphNodes.get(nodes[i].id)!,
            this.graphNodes.get(nodes[c].id)!
          )
        );
      }
    }

    console.log(this.graphAttractions.size);

    this.canvas = createCanvas(container);
    this.canvas.onmousemove = e => {
      this.updateMousePos(e);
    };

    requestAnimationFrame(() => {
      this.mainLoop();
    });
  }

  public mainLoop() {
    requestAnimationFrame(() => {
      this.mainLoop();
    });
    console.time("update");
    this.graphAttractions.clear();
    this.getAttractions();
    console.log("attractions", this.graphAttractions.size);
    physicsStep(this.graphNodes, this.graphEdges, this.graphAttractions);
    console.timeEnd("update");
    console.time("render");
    render(this.canvas.getContext("2d")!, this.graphNodes, this.graphEdges);
    console.timeEnd("render");
    this.numLoops++;
  }

  private updateMousePos(e: MouseEvent) {
    this.mousePos = getMousePosition(this.canvas, e);
  }

  private getAttractions() {
    this.graphNodes.forEach((node, key) => {
      const { x, y } = node.position;
      this.graphNodes.forEach((n, k) => {
        const { x: nx, y: ny } = n.position;
        if (nx > x - 100 && nx < x + 100 && ny > y - 100 && ny < y + 100) {
          if (
            !this.graphAttractions.has(key + "-" + k) &&
            !this.graphAttractions.has(k + "-" + key)
          ) {
            this.graphAttractions.set(key + "-" + k, new Attraction2D(node, n));
          }
        }
      });
    });
  }
}

if (!(window as any).VNetGraph) {
  (window as any).VNetGraph = VNetGraph;
}

export default VNetGraph;
