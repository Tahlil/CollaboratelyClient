import { Injectable } from '@angular/core';
import { data } from "../models/data.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private datasets: data[] = []; 

  constructor() { }

  loadDatasets(){
    
  }

  getDataset(){
    return this.datasets;
  }
  
}
