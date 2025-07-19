import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimIntroPage } from './anim-intro.page';

const routes: Routes = [
  {
    path: '',
    component: AnimIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimIntroPageRoutingModule {}
