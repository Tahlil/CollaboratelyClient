import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ScrollbarThemeModule  } from '../directives/scrollbar.directive';

import { ManageDataPageRoutingModule } from './manage-data-routing.module';

import { ManageDataPage } from './manage-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageDataPageRoutingModule,
    ScrollbarThemeModule
  ],
  declarations: [ManageDataPage]
})
export class ManageDataPageModule {}
