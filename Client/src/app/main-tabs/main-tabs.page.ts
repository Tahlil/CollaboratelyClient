import { Component, OnInit } from '@angular/core';
import { ManageDataPage } from "../manage-data/manage-data.page";
import { ManageModelPage } from "../manage-model/manage-model.page";
@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.page.html',
  styleUrls: ['./main-tabs.page.scss'],
})
export class MainTabsPage implements OnInit {
  ManageDataPage = ManageDataPage;
  ManageModelPage = ManageModelPage;
  constructor() { }

  ngOnInit() {
  }

}
