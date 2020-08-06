import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { MainPage } from './main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  declarations: [MainPage],
  bootstrap: [MainPage]
})
export class MainPageModule {}
