import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-updates',
  templateUrl: 'updates.html',
})
export class UpdatesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  start(){
    let alert = this.alertCtrl.create({
      title: 'ICAR-NRCL',
      subTitle: 'We believe in litchi!!',
      buttons: ['Close']
    });
    alert.present();
 

  }

}
