import { Injectable } from '@angular/core';
import { NN_Model } from "../models/nn.model";
import { HelperService } from "./helper.service";

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private models: NN_Model[] = []; 
  currentModel: NN_Model;
  id:number;

  regularizationOptions:Array<string> = ["None", "L1", "L2"];
  private activationFunctions:Array<string> = ["Linear", "Relu", "Leaky Relu", "Sigmoid", "Softmax", "Tanh", "Swish"];
  private trainingMethods:Array<string> = ["Batch Gradient Descent", "Mini Batch Gradient Descent", "Stochastic Gradient Descent"]
  private optimizers = ["none", "Ada boost"]
  constructor(private helper:HelperService) {
    this.id=0;
  }

  private getRandomNumberOfLayers():Array<number>{
    let numberOfLayers = this.helper.getRandomInt(3,6), layers= [];
    for (let layer = 0; layer < numberOfLayers; layer++) {
      layers.push(this.helper.getRandomInt(1,7));
    }
    return layers;
  }

  generateRandomModel(numberOfFeatures: number): NN_Model{
    let layers = this.getRandomNumberOfLayers(), activationFunctions = [];
    for (let i=0; i<layers.length; i++) {
      activationFunctions.push(this.activationFunctions[this.helper.getRandomInt(0, this.activationFunctions.length)])
    }
    let weightsAndBiases = this.generateSmallRandomBiasAndWeights(layers);
    const model: NN_Model = {
      id: this.getLatestID(),
      isEncrypted: Math.random() < 0.5 ? true : false,
      modelName: this.helper.generateRandomWord(),
      isTrained: false,
      optimizer: "none",
      trainingMethod: this.trainingMethods[this.helper.getRandomInt(0, this.trainingMethods.length)],
      layers: [numberOfFeatures, ...layers],
      biases: weightsAndBiases.biases,
      weights: weightsAndBiases.weights,
      activations: activationFunctions,
      regularization: this.regularizationOptions[this.helper.getRandomInt(0,3)],
      learningRate: Math.random(),
      epochs: this.helper.getRandomInt(1000, 10000)
    };
    return model;
  }

  private generateSmallRandomBiasAndWeights(layers){
    let weights = this.generateRandomWeights(layers), biases =this.generateRandomBiases(layers);
    return {weights:weights, biases:biases}
  }

  generateRandomBiases(layers){
    let  biases =[];
    for (let i = 0; i < layers.length; i++) {
      const currentLayer = layers[i], currentBiases =[];
      for (let j = 0; j < currentLayer; j++) {
        currentBiases.push(this.helper.getRandomFloat(1,11).toFixed(2));
      } 
      biases.push(currentBiases); 
    }
    return biases;
  }

  generateRandomWeights(layers){
    let weights= [];
    for (let i = 0; i < layers.length; i++) {
      const currentLayer = layers[i], currentWeights = [];
      for (let j = 0; j < currentLayer; j++) {
        currentWeights.push(Math.random().toFixed(2))
      }
      weights.push(currentWeights);  
    }
    return weights;
  }

  private getLatestID(){
    let currentId = this.id;
    this.id++;
    return currentId;
  }

  loadModels(){
    for (let num = 0; num < 10; num++) {
      this.models.push(this.generateRandomModel(this.helper.getRandomInt(3,11)))
    }
  }

  getModels(){
    return this.models;
  }

  getOptimizers(){
    return this.optimizers;
  }

  getTrainingMethods(){
    return this.trainingMethods;
  }

  getRegularizationOptions(){
    return this.regularizationOptions;
  }

  getActivationFunctions(){
    return this.activationFunctions;
  }
}
