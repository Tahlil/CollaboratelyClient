import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Data } from "../models/data.model";
@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.page.html',
  styleUrls: ['./manage-data.page.scss'],
})
export class ManageDataPage implements OnInit {
  datasets:Data[];

  constructor(private dataService:DataService) { 
    this.datasets = this.dataService.getDataset();
  }

  ngOnInit() {
  }

}
