import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the Formulas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-formulas',
  templateUrl: 'formulas.html',
})
export class FormulasPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulasPage');
  }

  search() {
    let toast = this.toastCtrl.create({
      message: 'Search button clicked',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
