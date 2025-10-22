import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAliPage } from './create-ali.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAliPageRoutingModule {}
