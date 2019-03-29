import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PublicationServicesProvider } from "../../providers/publication-services/publication-services";
import { PublicationPage } from "../publication/publication";

/**
 * Generated class for the BooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-books",
  templateUrl: "books.html"
})
export class BooksPage {
  books = [];
  author: any;
  Bstatus = false;
  value: any;

  constructor(
    private publicationService: PublicationServicesProvider,
    public navParams: NavParams,
    public navCtrl: NavController
  ) {
    this.value = navParams.get("item");
    // this.navCtrl.pop();
  }

  ionViewWillEnter() {
    // Uploading research papers by different authors
    this.publicationService.getResearch().subscribe(info => {
      for (let i = 1; i < info[this.value]["research_papers"].length; i++) {
        this.books.push(info[this.value]["research_papers"][i]);
        //console.log(info[this.value]["research_papers"][i]);
        this.author = info[this.value]["research_papers"][0];
      }

      this.Bstatus = true;

      //console.log(this.books);
      //this.books = [];
    });
  }

  // booksList() {

  // }
}
