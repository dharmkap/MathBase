import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlgebraPage } from '../pages/algebra/algebra';
import { AlgebraIIPage } from '../pages/algebra-ii/algebra-ii';
import { CalculusPage } from '../pages/calculus/calculus';
import { LinearAlgebraPage } from '../pages/linear-algebra/linear-algebra';
import { TrigonometryPage } from '../pages/trigonometry/trigonometry';
import { FormulasPage } from '../pages/formulas/formulas';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlgebraPage,
    AlgebraIIPage,
    CalculusPage,
    LinearAlgebraPage,
    TrigonometryPage,
    FormulasPage,
    SettingsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlgebraPage,
    AlgebraIIPage,
    CalculusPage,
    LinearAlgebraPage,
    TrigonometryPage,
    FormulasPage,
    SettingsPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
