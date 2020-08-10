import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetLayerModalPageRoutingModule } from './get-layer-modal-routing.module';

import { GetLayerModalPage } from './get-layer-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetLayerModalPageRoutingModule
  ],
  declarations: [GetLayerModalPage]
})
export class GetLayerModalPageModule {}
