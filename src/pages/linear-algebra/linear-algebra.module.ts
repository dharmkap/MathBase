import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinearAlgebraPage } from './linear-algebra';

@NgModule({
  declarations: [
    LinearAlgebraPage,
  ],
  imports: [
    IonicPageModule.forChild(LinearAlgebraPage),
  ],
  exports: [
    LinearAlgebraPage
  ]
})
export class LinearAlgebraModule {}
