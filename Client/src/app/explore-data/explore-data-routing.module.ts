import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreDataPage } from './explore-data.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreDataPageRoutingModule {}
