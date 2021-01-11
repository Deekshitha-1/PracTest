import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesecondPageRoutingModule } from './pagesecond-routing.module';

import { PagesecondPage } from './pagesecond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesecondPageRoutingModule
  ],
  declarations: [PagesecondPage]
})
export class PagesecondPageModule {}
