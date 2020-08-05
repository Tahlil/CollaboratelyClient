import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegMachinePageRoutingModule } from './reg-machine-routing.module';

import { RegMachinePage } from './reg-machine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegMachinePageRoutingModule
  ],
  declarations: [RegMachinePage]
})
export class RegMachinePageModule {}
