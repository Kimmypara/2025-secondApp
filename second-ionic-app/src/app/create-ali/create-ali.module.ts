import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAliPageRoutingModule } from './create-ali-routing.module';

import { CreateAliPage } from './create-ali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAliPageRoutingModule
  ],
  declarations: [CreateAliPage]
})
export class CreateAliPageModule {}
