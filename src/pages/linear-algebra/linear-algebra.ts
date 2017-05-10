import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LinearAlgebra page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-linear-algebra',
  templateUrl: 'linear-algebra.html',
})
export class LinearAlgebraPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinearAlgebraPage');
  }

  search() {
    let toast = this.toastCtrl.create({
      message: 'Search button clicked',
      duration: 3000,
      position: 'button'
    });

    toast.present();
  }

}
