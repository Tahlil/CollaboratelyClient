import { Injectable } from '@angular/core';
import { Data } from "../models/data.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private datasets: Data[] = []; 

  constructor() { }

  loadDatasets(){
    for (let num = 0; num < 10; num++) {
      
    }
  }

  getDataset(){
    return this.datasets;
  }
  
}
