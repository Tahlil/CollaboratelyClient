import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
} from "@angular/core";
import { ModelService } from "../services/model.service";
import * as d3 from "d3";
import { ModalController } from '@ionic/angular';
import { GetLayerModalComponent } from '../modals/get-layer-modal/get-layer-modal.component';


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
  private width;
  private height = 690;
  private leftCut = 111;
  private layerIndexes = [];
  private inputLayer = 0;
  private hiddenLayers = [];
  private outputLayer = 0;

  constructor(private modelService: ModelService, public modalController: ModalController) {
    this.loadedModel = this.modelService.currentModel;
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
    this.width = window.innerWidth - 111;
    console.log(this.width);
    this.checkLeftCut();
    d3.select("svg").remove();
    this.createSvg();
    this.drawGraph();
  }

  ngOnInit() {
    this.width = window.innerWidth - 111;
    this.checkLeftCut();
    this.loadedModel = this.modelService.currentModel;
    let layers = this.modelService.currentModel.layers;
    this.inputLayer = layers[0];
    this.hiddenLayers = layers.slice(1, layers.length - 1);
    this.outputLayer = layers[layers.length - 1];
    this.createGraph();
    this.createSvg();
    this.drawGraph();
  }

  async presentModal(layerNumber) {
    const modal = await this.modalController.create({
      component: GetLayerModalComponent
    });
    modal.onDidDismiss().then((info) => {
      console.log(info.data);
      ;
    });
    return await modal.present();
    
  }

  private checkLeftCut() {
    if (window.innerWidth < 1192) {
      this.leftCut = -11;
    } else {
      this.leftCut = 111;
    }
  }

  private createGraph() {
    this.layerIndexes = [];
    let layerIndex = 0;
    this.graph.nodes = [];
    let totalLayers = this.hiddenLayers.length+1;
    for (let i = 0; i < this.inputLayer; i++) {
      const curLabel = "i" + i;
      this.graph.nodes.push({ label: curLabel, layer: 1 });
      layerIndex++;
    }
    for (let i = 0; i < this.hiddenLayers.length; i++) {
      let hiddenLayer = this.hiddenLayers[i];
      for (let j = 0; j < hiddenLayer; j++) {
        const curLabel = "h" + (i+1).toString() + j.toString();
        this.graph.nodes.push({ label: curLabel, layer: i + 2 });
        layerIndex++;
      }
      this.layerIndexes.push(layerIndex - 1);
    }
    for (let i = 0; i < this.outputLayer; i++) {
      const curLabel = "o" + i;
      this.graph.nodes.push({ label: curLabel, layer: totalLayers+1 });
      layerIndex++;
    }
    this.layerIndexes.push(layerIndex - 1);
    console.log(this.graph.nodes);
  }

  private createSvg(): void {
    this.svg = d3
      .select("figure#bar")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);
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
    let that = this;
    // create node locations
    nodes.map(function (d) {
      d["x"] = (d.layer - 0.5) * xdist - that.leftCut;
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
    console.log("Nodes: ");

    console.log(nodes);
    let lastNodes = [];
    for (let i = 0; i < this.layerIndexes.length; i++) {
      lastNodes.push({
        x: nodes[this.layerIndexes[i]].x,
        y: nodes[this.layerIndexes[i]].y,
        label: this.loadedModel.activations[i],
      });
      lastNodes[i].x -= 30;
      lastNodes[i].y += 25;
    }

    let everyLayers= [{
      x: nodes[0].x,
      y: nodes[0].y,
      label: "none",
      layer: 0}, ...lastNodes.map((x, index) => {
        return {...x, layer:index+1};
       }
      )]

    
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

    let lastNode = this.svg
      .selectAll(".node")
      .data(lastNodes)
      .enter()
      .append("g")
      .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

      let layerTitle = this.svg
      .selectAll(".node")
      .data([{ x: nodes[this.inputLayer-1].x,y: nodes[this.inputLayer-1].y},...lastNodes])
      .enter()
      .append("g")
      .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
      console.log(lastNode);
      console.log(layerTitle);
      
      

    let circle = node
      .append("circle")
      .attr("class", "node")
      .attr("r", nodeSize)
      .style("fill", function (d) {
        return color(d.layer);
      });

    let rect = lastNode
      .append("rect")
      .attr("class", "node")
      .attr("width", 81)
      .attr("height", nodeSize)
      .attr("stroke", "#8B0000")
      .style("fill", "red");

    node
      .append("text")
      .attr("dx", "-.35em")
      .attr("dy", ".35em")
      .attr("font-size", ".6em")
      .text(function (d) {
        return d.label;
      });


      
      let index = 0;
      if (window.innerWidth > 700) {
        layerTitle
     
        .append("text")
        .attr("dx", "-0.1em")
        .attr("dy", "2.1em")
        .attr("font-size", "1.1em")
        .style("fill", "black")
  
        .text(function (d) {
          let output= ""
          if(index === 0) output= "Input Layer";
          else if(index === that.hiddenLayers.length+1)  output= "Output Layer";
          else output= "Hidden Layer " + index;
          index++
          return output;
        });  
      }
      

    
    lastNode
      .append("text")
      .attr("dx", function (d) {
        if (d.label == "Linear") return "2.3em";
        if (d.label == "Relu") return "2.6em";
        if (d.label == "Leaky Relu") return "1.3em";
        if (d.label == "Sigmoid") return "1.7em";
        if (d.label == "Softmax") return "1.7em";
        if (d.label == "Tanh") return "2.5em";
        if (d.label == "Swish") return "2.1em";
        return "1.1em";
      })
      .attr("dy", "1.3em")
      .attr("font-size", "0.7em")
      .style("fill", "white")

      .text(function (d) {
        console.log("Test...");
        
        return d.label;
      });

      
  }

  private redraw(){
    d3.select("svg").remove();
    this.createSvg();
    this.createGraph();
    this.drawGraph();
  }

  addNode(layerNumber) {
    console.log("Layer Number: " + layerNumber);
    if (layerNumber === 0) {
      this.inputLayer++;
    } else if (layerNumber === this.hiddenLayers.length+1) {
      this.outputLayer++;
    } else {
      this.hiddenLayers[layerNumber-1]++;
    }
    this.redraw();
  }

  checkRemoveLayer(layerNumber){
    this.hiddenLayers.splice(layerNumber, 1);
    this.loadedModel.activations.splice(layerNumber, 1);
  }

  private removeLayer(layerNumber){
    console.log("Removing layer " + layerNumber);
    this.checkRemoveLayer(layerNumber-1);
    this.redraw();
  }

  private onActivationFunctionChange(e, index){
    console.log(e);
    console.log("Clicked.");
    this.loadedModel.activations[index] = e.target.value;
    this.redraw();
  }

  removeNode(layerNumber) {
    if (
      (layerNumber == 0 && this.inputLayer === 1) ||
      (layerNumber == this.hiddenLayers.length+1 && this.outputLayer === 1)
    ) {
      return;
    }
    if (layerNumber === 0) {
      this.inputLayer--;
    } else if (layerNumber === this.hiddenLayers.length+1) {
      this.outputLayer--;
    } else {
      this.hiddenLayers[layerNumber-1]--;
      if (this.hiddenLayers[layerNumber] === 0) {
        this.checkRemoveLayer(layerNumber-1);
      }
    }
    this.redraw();
  }

  addHiddenLayer(){

  }
}
