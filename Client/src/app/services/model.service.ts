import { Injectable } from '@angular/core';
import { NN_Model } from "../models/nn.model";


@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private models: NN_Model[] = []; 
  id:number;
  regularizationOptions:Array<string> = ["None", "L1", "L2"];
  activationFunctions:Array<string> = ["Linear", "Relu", "Leaky Relu", "Sigmoid", "Softmax", "Tanh", "Swish"];
  trainingMethods:Array<string> = ["Batch Gradient Descent", "Mini Batch Gradient Descent", "Stochastic Gradient Descent"]

  constructor() {
    this.id=0;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  private getRandomnumberOfLayers():Array<number>{
    let numberOfLayers = this.getRandomInt(5,11), layers= [];
    for (let layer = 0; layer < numberOfLayers; layer++) {
      layers.push(this.getRandomInt(1,11));
    }
    return layers;
  }

  private getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  generateRandomModel(numberOfFeatures: number): NN_Model{
    let layers = this.getRandomnumberOfLayers(), activationFunctions = [];
    
    for (let i=0; i<layers.length; i++) {
      activationFunctions.push(this.activationFunctions[this.getRandomInt(1, this.activationFunctions.length)])
    }
    const model: NN_Model = {
      id: this.getLatestID(),
      isEncrypted: Math.random() < 0.5 ? true : false,
      isTrained: false,
      optimizers: [],
      trainingMethod: this.trainingMethods[this.getRandomInt(1, this.trainingMethods.length)],
      layers: [numberOfFeatures, ...layers],
      biases: [],
      weights: [],
      activations: activationFunctions,
      regularization: this.regularizationOptions[this.getRandomInt(1,4)],
      learningRate: Math.random()
    };
    return model;
  }

  generateSmallRandomBiasAndWeights(layers){
    let weights = [], biases =[];
    for (let i = 0; i < layers.length; i++) {
      const currentLayer = layers[i], currentWeights = [], currentBiases =[];
      for (let j = 0; j < currentLayer; j++) {
        currentBiases.push(this.getRandomFloat(1,11));
        currentWeights.push(Math.random())
      }
      weights.push(currentWeights);
      biases.push(currentBiases); 
    }
    
    return {weights:weights, biases:biases}
  }

  private getLatestID(){
    let currentId = this.id;
    this.id++;
    return currentId;
  }

  loadModels(){
    for (let num = 0; num < 10; num++) {
      this.models.push(this.generateRandomModel(this.getRandomInt(3,11)))
    }
  }

  getModels(){
    return this.models;
  }
}
