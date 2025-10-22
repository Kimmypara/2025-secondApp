import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextPagePageRoutingModule } from './text-page-routing.module';

import { TextPagePage } from './text-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextPagePageRoutingModule
  ],
  declarations: [TextPagePage]
})
export class TextPagePageModule {}
