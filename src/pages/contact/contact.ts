import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
// import { CallNumber } from "@ionic-native/call-number/ngx";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-contact",
  templateUrl: "contact.html"
})
export class ContactPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams // private callNumber: CallNumber
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ContactPage");
  }

  // call() {
  //   this.callNumber
  //     .callNumber("18001010101", true)
  //     .then(res => console.log("Launched dialer!", res))
  //     .catch(err => console.log("Error launching dialer", err));
  // }
}
