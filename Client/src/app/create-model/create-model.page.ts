import { Component, OnInit } from '@angular/core';
import { ModelService } from "../services/model.service";
@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.page.html',
  styleUrls: ['./create-model.page.scss'],
})
export class CreateModelPage implements OnInit {
  loadedModel;
  constructor(private modelService:ModelService) { }

  ngOnInit() {
    this.loadedModel = this.modelService.currentModel;
  }

}
