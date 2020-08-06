import { Injectable } from '@angular/core';
import { Data } from "../models/data.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private datasets: Data[] = []; 

  constructor() { }

  loadDatasets(){

  }

  getDataset(){
    return this.datasets;
  }
  
}
