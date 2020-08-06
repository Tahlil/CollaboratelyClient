import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageModelPage } from './manage-model.page';

const routes: Routes = [
  {
    path: '',
    component: ManageModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageModelPageRoutingModule {}
