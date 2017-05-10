import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlgebraIIPage } from './algebra-ii';

@NgModule({
  declarations: [
    AlgebraIIPage,
  ],
  imports: [
    IonicPageModule.forChild(AlgebraIIPage),
  ],
  exports: [
    AlgebraIIPage
  ]
})
export class AlgebraIIModule {}
