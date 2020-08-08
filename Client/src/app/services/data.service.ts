import { Injectable } from '@angular/core';
import { Data } from "../models/data.model";
import { HelperService } from "./helper.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private datasets: Data[] = []; 
  private fileTypes = ['csv', 'tsv', "xls", "xlsx"]
  private dataTypes = ["Nominal", "Ordinal", "Interval",  "Ratio"];

  constructor(private helper:HelperService) {
  }

  getRandomTypes(n){
    let dataTypes = []
    for (let i = 0; i < n; i++) {
      dataTypes.push(this.dataTypes[this.helper.getRandomInt(2,4)]);
    }
    return dataTypes;
  }

  loadDatasets(){
    let numberOfColumns = this.helper.getRandomInt(3, 11);
    for (let i = 0; i < 5; i++) {
      this.datasets.push(
        {
          id: i,
          fileName: this.helper.generateRandomWord(),
          fileType: this.fileTypes[this.helper.getRandomInt(0, this.fileTypes.length)],
          datasetName: this.helper.generateRandomWord(),
          description: this.helper.generateRandomSentence(),
          columns: this.helper.getListOfWords(numberOfColumns),
          columnTypes: this.getRandomTypes(numberOfColumns),
          numberOfRow: this.helper.getRandomInt(10, 10000),
          isEncrypted: false
        }
      );   
    }    
    return this.datasets;
  }

  getDataset(){
    return this.datasets;
  }
  
}
