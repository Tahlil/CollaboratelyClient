import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
} from "@angular/core";
import { ModelService } from "../services/model.service";
import * as d3 from "d3";

@Component({
  selector: "app-create-model",
  templateUrl: "./create-model.page.html",
  styleUrls: ["./create-model.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CreateModelPage implements OnInit {
  loadedModel;
  graph;

  private svg;
  private margin = 50;
  private width;
  private height = 400 - this.margin * 2;

  constructor(private modelService: ModelService) {
    this.graph = {
      nodes: [
        // { label: "i0", layer: 1 },
        // { label: "i1", layer: 1 },
        // { label: "i2", layer: 1 },
        // { label: "h01", layer: 2 },
        // { label: "h02", layer: 2 },
        // { label: "h03", layer: 2 },
        // { label: "h11", layer: 3 },
        // { label: "h12", layer: 3 },
        // { label: "h13", layer: 3 },
        // { label: "o0", layer: 4 },
      ],
    };
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.width = window.innerWidth;
    console.log(this.width);
    d3.select("svg").remove();
    this.createSvg();
    this.drawGraph();
  }

  ngOnInit() {
    this.width = window.innerWidth;
    this.loadedModel = this.modelService.currentModel;
    this.createGraph();
    this.createSvg();
    this.drawGraph();
  }

  private createGraph(){
    let layers = this.modelService.currentModel.layers;
    let inputLayers = layers[0];
    let hiddenLayers = layers.slice(1, layers.length-1);
    let outputLayer = layers[layers.length-1]
    for (let i = 0; i < inputLayers; i++) {
      const curLabel = "i"+i;
      this.graph.nodes.push({ label: curLabel, layer: 1});
    }
    for (let i = 0; i < hiddenLayers.length; i++) {
      let hiddenLayer = hiddenLayers[i];
      for (let j = 0; j < hiddenLayer; j++) {
        const curLabel = "h"+i.toString()+j.toString();
        this.graph.nodes.push({ label: curLabel, layer: i+2 });  
      }
    }
    for (let i = 0; i < outputLayer; i++) {
      const curLabel = "o"+i;
      this.graph.nodes.push({ label: curLabel, layer: layers.length });
    }
    console.log(this.graph.nodes);
    
  }

  private createSvg(): void {
    this.svg = d3
      .select("figure#bar")
      .append("svg")
      .attr("width", this.width + this.margin * 2)
      .attr("height", this.height + this.margin * 2);
  }

  private drawGraph(): void {
    // // Create the X-axis band scale
    let nodeSize = 21;
    let color = d3.scaleOrdinal(d3.schemeAccent);
    let nodes = this.graph.nodes;

    // get network size
    // get network size
    let netsize = {};
    nodes.forEach(function (d) {
      if (d.layer in netsize) {
        netsize[d.layer] += 1;
      } else {
        netsize[d.layer] = 1;
      }
      d["lidx"] = netsize[d.layer];
    });

    // calc distances between nodes
    let largestLayerSize = Math.max.apply(
      null,
      Object.keys(netsize).map(function (i) {
        return netsize[i];
      })
    );

    let xdist = this.width / Object.keys(netsize).length,
      ydist = (this.height - 15) / largestLayerSize;

    // create node locations
    nodes.map(function (d) {
      d["x"] = (d.layer - 0.5) * xdist;
      d["y"] =
        (d.lidx - 0.5 + (largestLayerSize - netsize[d.layer]) / 2) * ydist + 10;
    });

    // autogenerate links
    let links = [];
    nodes
      .map(function (d, i) {
        for (let n in nodes) {
          if (d.layer + 1 == nodes[n].layer) {
            links.push({ source: parseInt(i), target: parseInt(n), value: 1 });
          }
        }
      })
      .filter(function (d) {
        return typeof d !== "undefined";
      });

    // draw links
    let link = this.svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("x1", function (d) {
        return nodes[d.source].x;
      })
      .attr("y1", function (d) {
        return nodes[d.source].y;
      })
      .attr("x2", function (d) {
        return nodes[d.target].x;
      })
      .attr("y2", function (d) {
        return nodes[d.target].y;
      })
      .style("stroke-width", function (d) {
        return Math.sqrt(d.value);
      });

    // draw nodes
    let node = this.svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

    let circle = node
      .append("circle")
      .attr("class", "node")
      .attr("r", nodeSize)
      .style("fill", function (d) {
        return color(d.layer);
      });

    node
      .append("text")
      .attr("dx", "-.35em")
      .attr("dy", ".35em")
      .attr("font-size", ".6em")
      .text(function (d) {
        return d.label;
      });
  }
}
