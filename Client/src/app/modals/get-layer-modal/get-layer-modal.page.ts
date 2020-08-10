import { Component, OnInit, NgModule } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModelService } from "../../services/model.service";
@Component({
  selector: 'app-get-layer-modal',
  templateUrl: './get-layer-modal.page.html',
  styleUrls: ['./get-layer-modal.page.scss'],
})
export class GetLayerModalPage implements OnInit {

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
