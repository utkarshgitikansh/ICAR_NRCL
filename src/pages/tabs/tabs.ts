import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { AlertController } from "ionic-angular";
import { PublicationPage } from "../publication/publication";
import { UpdatesPage } from "../updates/updates";
import { ResearchPage } from "../research/research";
import { StatusBar } from "@ionic-native/status-bar";
import { SettingProvider } from "../../providers/setting/setting";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  home = HomePage;
  updates = UpdatesPage;
  research = ResearchPage;
  publication = PublicationPage;
  contact = ContactPage;

  selectedTheme: String;

  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private statusBar: StatusBar,
    private setting: SettingProvider
  ) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString("#ffffff");
  }

  start() {
    window.open("https://www.youtube.com/watch?v=2Qpa6lTS87Y", "_system");
    //this.navCtrl.push();
  }

  nightMode() {
    this.setting.activeTheme = "theme-dark";
    this.statusBar.backgroundColorByHexString("#1b2737");
  }

  dayMode() {
    this.setting.activeTheme = "theme-light";
    this.statusBar.backgroundColorByHexString("#ffffff");
  }
}
