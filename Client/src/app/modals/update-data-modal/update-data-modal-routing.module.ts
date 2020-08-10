import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDataModalPage } from './update-data-modal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDataModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDataModalPageRoutingModule {}
