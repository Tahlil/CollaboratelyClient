import { Component, OnInit } from '@angular/core';
import { ModelService } from "../services/model.service";
import { NN_Model } from "../models/nn.model";
@Component({
  selector: 'app-manage-model',
  templateUrl: './manage-model.page.html',
  styleUrls: ['./manage-model.page.scss'],
})
export class ManageModelPage implements OnInit {
  models:NN_Model[];

  constructor(private nnModelService:ModelService) {
    this.models = this.nnModelService.getModels();
   }

  ngOnInit() {
  }

}
