import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrigonometryPage } from './trigonometry';

@NgModule({
  declarations: [
    TrigonometryPage,
  ],
  imports: [
    IonicPageModule.forChild(TrigonometryPage),
  ],
  exports: [
    TrigonometryPage
  ]
})
export class TrigonometryModule {}
