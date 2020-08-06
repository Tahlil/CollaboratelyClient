import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainTabsPage } from './main-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: MainTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainTabsPageRoutingModule {}
