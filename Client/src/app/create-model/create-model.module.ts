import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateModelPageRoutingModule } from './create-model-routing.module';

import { CreateModelPage } from './create-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateModelPageRoutingModule
  ],
  declarations: [CreateModelPage]
})
export class CreateModelPageModule {}
