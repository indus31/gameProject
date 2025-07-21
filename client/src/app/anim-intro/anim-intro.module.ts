import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimIntroPageRoutingModule } from './anim-intro-routing.module';

import { AnimIntroPage } from './anim-intro.page';
import { TitleIntroComponent } from './title-intro/title-intro.component';
import { AnimationVilleIntroComponent } from './animation-ville-intro/animation-ville-intro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimIntroPageRoutingModule
  ],
  declarations: [AnimIntroPage,TitleIntroComponent,AnimationVilleIntroComponent]
})
export class AnimIntroPageModule {}
