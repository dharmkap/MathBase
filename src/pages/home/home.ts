import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
