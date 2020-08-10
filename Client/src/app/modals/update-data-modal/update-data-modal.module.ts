import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDataModalPageRoutingModule } from './update-data-modal-routing.module';

import { UpdateDataModalPage } from './update-data-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDataModalPageRoutingModule
  ],
  declarations: [UpdateDataModalPage]
})
export class UpdateDataModalPageModule {}
