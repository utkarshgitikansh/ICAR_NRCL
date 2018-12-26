import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { PublicationPage } from '../publication/publication';
import { UpdatesPage } from '../updates/updates';
import { ResearchPage } from '../research/research';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home = HomePage;
  updates = UpdatesPage;
  research = ResearchPage;
  publication = PublicationPage;
  contact = ContactPage;
 
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, private statusBar: StatusBar){

    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#ffffff'); 

  }


  start(){
    let alert = this.alertCtrl.create({
      title: 'ICAR-NRCL',
      subTitle: 'We believe in litchi!!',
      buttons: ['Close']
    });
    alert.present();
    //this.navCtrl.push();
  }

}