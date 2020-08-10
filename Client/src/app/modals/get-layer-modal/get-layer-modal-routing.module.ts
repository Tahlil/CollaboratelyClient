import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetLayerModalPage } from './get-layer-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GetLayerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetLayerModalPageRoutingModule {}
