import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreDataPageRoutingModule } from './explore-data-routing.module';

import { ExploreDataPage } from './explore-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreDataPageRoutingModule
  ],
  declarations: [ExploreDataPage]
})
export class ExploreDataPageModule {}
