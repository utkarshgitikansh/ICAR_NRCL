import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { PublicationServicesProvider } from "../../providers/publication-services/publication-services";
import { BooksPage } from "../../pages/books/books";

/**
 * Generated class for the PublicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-publication",
  templateUrl: "publication.html"
})
export class PublicationPage {
  constructor(
    public navCtrl: NavController,
    private publicationService: PublicationServicesProvider,
    private modal: ModalController
  ) {}

  research_name = [];
  research_data = [];
  research = new Map();
  Rstatus = false;
  //Bstatus = false;

  ionViewWillEnter() {
    // Uploading research papers by different authors

    this.publicationService.getResearch().subscribe(info => {
      let research_length = info.length;

      for (let i = 0; i < research_length; i++) {
        this.research_name.push(info[i]["research_papers"][0]);
      }

      this.Rstatus = true;
    });
  }

  showList(r) {
    // this.publicationService.getResearch().subscribe(info => {
    //   for (let i = 1; i < info[r]["research_papers"].length; i++) {
    //     this.research_data.push(info[r]["research_papers"][i]);
    //   }
    //   console.log(this.research_data);
    //   this.research_data = [];
    //   this.Bstatus = true;
    this.navCtrl.push(BooksPage, {
      item: r
    });
    this.research_name = [];
    // this.navCtrl.pop();
    //});
  }
}
