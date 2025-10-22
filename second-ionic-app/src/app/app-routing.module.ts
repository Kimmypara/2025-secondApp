import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'text-page',
    loadChildren: () => import('./text-page/text-page.module').then( m => m.TextPagePageModule)
  },
  {
    path: 'create-ali',
    loadChildren: () => import('./create-ali/create-ali.module').then( m => m.CreateAliPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
