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
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {}
