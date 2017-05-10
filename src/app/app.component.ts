import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AlgebraPage } from '../pages/algebra/algebra';
import { AlgebraIIPage } from '../pages/algebra-ii/algebra-ii';
import { CalculusPage } from '../pages/calculus/calculus';
import { LinearAlgebraPage } from '../pages/linear-algebra/linear-algebra';
import { TrigonometryPage } from '../pages/trigonometry/trigonometry';
import { FormulasPage } from '../pages/formulas/formulas';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
  
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Algebra', component: AlgebraPage },
      { title: 'Algebra II', component: AlgebraIIPage },
      { title: 'Calculus', component: CalculusPage },
      { title: 'Linear Algebra', component: LinearAlgebraPage },
      { title: 'Trigonometry', component: TrigonometryPage },
      { title: 'Formulas', component: FormulasPage },
      { title: 'Settings', component: SettingsPage },      
      { title: 'About', component: AboutPage }
    ];

    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
