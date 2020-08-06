import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageDataPageRoutingModule } from './manage-data-routing.module';

import { ManageDataPage } from './manage-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageDataPageRoutingModule
  ],
  declarations: [ManageDataPage]
})
export class ManageDataPageModule {}
