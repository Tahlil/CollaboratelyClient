import { Injectable } from '@angular/core';
import { nnModel } from "../models/nn.model";

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private models: nnModel[] = []; 

  constructor() { }

  loadModels(){
    
  }

  getModels(){
    return this.models;
  }
}
