import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculusPage } from './calculus';

@NgModule({
  declarations: [
    CalculusPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculusPage),
  ],
  exports: [
    CalculusPage
  ]
})
export class CalculusModule {}
