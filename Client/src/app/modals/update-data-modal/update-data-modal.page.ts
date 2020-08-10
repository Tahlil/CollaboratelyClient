import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-data-modal',
  templateUrl: './update-data-modal.page.html',
  styleUrls: ['./update-data-modal.page.scss'],
})
export class UpdateDataModalPage implements OnInit {
  privacy:boolean = false;
  fileUploaded:boolean=false;
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  
  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'nodesGiven': false
    });
  }

  onInputTime(v){
    // this.nodes = parseInt(v);
  }

  fileChange(v){
    this.fileUploaded = true;
    console.log(v);
    
  }


  changePrivacy(v){
    console.log("Change privacy.");
    this.privacy = !this.privacy;
  }
  
  private onActivationFunctionChange(af){
    // this.activationFunction  = af;
  }

  createNewHL(){
    this.modalCtrl.dismiss({
      'dismissed': true,
      'nodesGiven': true,
   
    });

  }
  onDatasetNameChange(v){

  }
}