import { Component, OnInit, NgModule } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-get-layer-modal',
  templateUrl: './get-layer-modal.component.html',
  styleUrls: ['./get-layer-modal.component.scss'],
})
@NgModule({
  imports: [FormsModule]
})

export class GetLayerModalComponent implements OnInit {
  nodes:Number;
  constructor(public modalCtrl: ModalController) { 
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

  createNewHL(){
    this.modalCtrl.dismiss({
      'dismissed': true,
      'nodesGiven': true,
      'nodes': this.nodes
    });
  }

}
