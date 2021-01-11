import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagesecond',
    loadChildren: () => import('./pagesecond/pagesecond.module').then( m => m.PagesecondPageModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./third/third.module').then( m => m.ThirdPageModule)
  },
  {
    path: 'four',
    loadChildren: () => import('./four/four.module').then( m => m.FourPageModule)
  },
  {
    path: 'five',
    loadChildren: () => import('./five/five.module').then( m => m.FivePageModule)
  },
  {
    path: 'six',
    loadChildren: () => import('./six/six.module').then( m => m.SixPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
