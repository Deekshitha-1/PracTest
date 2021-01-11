import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesecondPage } from './pagesecond.page';

const routes: Routes = [
  {
    path: '',
    component: PagesecondPage
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesecondPageRoutingModule {}
