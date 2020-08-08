import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Data } from "../models/data.model";
import { MachineService } from "../services/machine.service";
@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.page.html',
  styleUrls: ['./manage-data.page.scss'],
})
export class ManageDataPage implements OnInit {
  datasets:Data[];

  constructor(private dataService:DataService, private machineService:MachineService) { 
    this.datasets = this.dataService.getDataset();
    console.log("Dataset: ");
    
    console.log(this.datasets);
    
  }

  ngOnInit() {
  }

  machineRegistered(){
    return this.machineService.machineRegistered;
  }
}
