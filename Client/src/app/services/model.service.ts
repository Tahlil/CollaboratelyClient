import { Injectable } from '@angular/core';
import { NN_Model } from "../models/nn.model";

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private models: NN_Model[] = []; 

  constructor() { }

  loadModels(){
    
  }

  getModels(){
    return this.models;
  }
}
