import { Component, OnInit } from '@angular/core';
import { ModelService } from "../services/model.service";
import { NN_Model } from "../models/nn.model";
import { MachineService } from "../services/machine.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-manage-model',
  templateUrl: './manage-model.page.html',
  styleUrls: ['./manage-model.page.scss'],
})
export class ManageModelPage implements OnInit {
  models:NN_Model[];

  constructor(private nnModelService:ModelService, private machineService:MachineService, private router: Router) {
     this.nnModelService.loadModels();
     this.models = this.nnModelService.getModels();
   }

  ngOnInit() {
  }

  machineRegistered(){
    return this.machineService.machineRegistered;
  }

  goToWorkspace(model){
    this.nnModelService.currentModel = model;
    this.router.navigate(['/', 'main', 'create-model']);
  }

}
