import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Data } from "../models/data.model";
import { MachineService } from "../services/machine.service";
import { Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import { UpdateDataModalPage } from "../modals/update-data-modal/update-data-modal.page";
@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.page.html',
  styleUrls: ['./manage-data.page.scss'],
})
export class ManageDataPage implements OnInit {
  datasets:Data[];

  constructor(private dataService:DataService, private machineService:MachineService, private router: Router, public modalController: ModalController) { 
    this.datasets = this.dataService.loadDatasets();
    console.log("Dataset: ");
    
    console.log(this.datasets);
    
  }

  ngOnInit() {
  }

  machineRegistered(){
    return this.machineService.machineRegistered;
  }

  goToUpdateData(data){
    this.dataService.currentData = data;
    this.router.navigate(['/', 'main', 'update-data']);
  }

  async openUpdateModal(dataset){
    const modal = await this.modalController.create({
      component: UpdateDataModalPage,
      componentProps: { 
        dataset: dataset
      }
    });
    let that= this;
    modal.onDidDismiss().then((info) => {
      console.log(info.data);
      if(info.data.nodesGiven){
        // that.addHiddenLayer(layerNumber,  info.data.numberOfNodes, info.data.activationFunction);
      }
    });
    return await modal.present();
  }

  

  
}
