import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageDataPage } from './manage-data.page';

const routes: Routes = [
  {
    path: '',
    component: ManageDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageDataPageRoutingModule {}
