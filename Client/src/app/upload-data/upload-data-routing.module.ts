import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadDataPage } from './upload-data.page';

const routes: Routes = [
  {
    path: '',
    component: UploadDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadDataPageRoutingModule {}
