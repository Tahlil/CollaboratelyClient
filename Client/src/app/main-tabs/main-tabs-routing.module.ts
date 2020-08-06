import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTabsPage } from './main-tabs.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
const routes: Routes = [
  {
    path: '',
    component: MainTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),SuperTabsModule],
  exports: [RouterModule],
})
export class MainTabsPageRoutingModule {}
