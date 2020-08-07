import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMachinePage } from './update-machine.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMachinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMachinePageRoutingModule {}
