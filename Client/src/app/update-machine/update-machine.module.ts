import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMachinePageRoutingModule } from './update-machine-routing.module';

import { UpdateMachinePage } from './update-machine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMachinePageRoutingModule
  ],
  declarations: [UpdateMachinePage]
})
export class UpdateMachinePageModule {}
