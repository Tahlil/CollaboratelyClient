import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
 
  {
    path: 'manage-data',
    loadChildren: () => import('./manage-data/manage-data.module').then( m => m.ManageDataPageModule)
  },
  {
    path: 'manage-model',
    loadChildren: () => import('./manage-model/manage-model.module').then( m => m.ManageModelPageModule)
  },
  {
    path: 'get-layer-modal',
    loadChildren: () => import('./modals/get-layer-modal/get-layer-modal.module').then( m => m.GetLayerModalPageModule)
  },
  {
    path: 'update-data-modal',
    loadChildren: () => import('./modals/update-data-modal/update-data-modal.module').then( m => m.UpdateDataModalPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
