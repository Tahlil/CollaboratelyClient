import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageModelPageRoutingModule } from './manage-model-routing.module';

import { ManageModelPage } from './manage-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageModelPageRoutingModule
  ],
  declarations: [ManageModelPage]
})
export class ManageModelPageModule {}
