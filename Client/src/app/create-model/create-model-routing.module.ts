import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateModelPage } from './create-model.page';

const routes: Routes = [
  {
    path: '',
    component: CreateModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateModelPageRoutingModule {}
