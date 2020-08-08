import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicModule } from '@ionic/angular';
import { ScrollbarThemeModule  } from '../directives/scrollbar.directive';

import { MainTabsPageRoutingModule } from './main-tabs-routing.module';

import { MainTabsPage } from './main-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    MainTabsPageRoutingModule,
    ScrollbarThemeModule
  ],
  declarations: [MainTabsPage]
})
export class MainTabsPageModule {}
