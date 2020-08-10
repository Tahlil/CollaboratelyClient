import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '', component: MainPage, children: [
     
      { path: 'mini-tabs', loadChildren: () => import(`../main-tabs/main-tabs.module`).then(m => m.MainTabsPageModule) },
      {
        path: '', redirectTo: 'mini-tabs', pathMatch: 'full'
      },
      {
        path: 'reg-machine',
        loadChildren: () => import('../reg-machine/reg-machine.module').then( m => m.RegMachinePageModule)
      },
      {
        path: 'update-machine',
        loadChildren: () => import('../update-machine/update-machine.module').then( m => m.UpdateMachinePageModule)
      },
      {
        path: 'create-model',
        loadChildren: () => import('../create-model/create-model.module').then( m => m.CreateModelPageModule)
      },
      {
        path: 'upload-data',
        loadChildren: () => import('../upload-data/upload-data.module').then( m => m.UploadDataPageModule)
      },
      {
        path: 'explore-data',
        loadChildren: () => import('../explore-data/explore-data.module').then( m => m.ExploreDataPageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
