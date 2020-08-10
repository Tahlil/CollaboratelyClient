import { Component, OnInit, NgModule } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModelService } from "../../services/model.service";

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get-layer-modal',
  templateUrl: './get-layer-modal.component.html',
  styleUrls: ['./get-layer-modal.component.scss'],
})
@NgModule({
  imports: [CommonModule]
})

export class GetLayerModalComponent implements OnInit {
  nodes:number;
  activationFunction:string;

  constructor(private modelService: ModelService, public modalCtrl: ModalController) { 
    this.nodes = 1;
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'nodesGiven': false
    });
  }

  onInputTime(v){
    this.nodes = parseInt(v);
  }

  private onActivationFunctionChange(af){
    this.activationFunction  = af;
  }

  createNewHL(){
    this.modalCtrl.dismiss({
      'dismissed': true,
      'nodesGiven': true,
      'numberOfNodes': this.nodes,
      'activationFunction': this.activationFunction
    });
  }

}
