import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { PublicationServicesProvider } from "../../providers/publication-services/publication-services";
import { BooksPage } from "../../pages/books/books";


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
  
  bulletin_name = [];
  bulletin_data = [];
  bulletin = new Map();
  Bstatus = false;

  extension_name = [];
  extension_data = [];
  extension = new Map();
  Estatus = false;

  books_name = [];
  books_data = [];
  books = new Map();
  BUstatus = false;

  newsLetter_name = [];
  newsLetter_data = [];
  newsLetter = new Map();
  NEstatus = false;

  patrika_name =[];
  patrika_data = [];
  patrika = new Map();
  Pstatus = false;

  archives_name =[];
  archives_data = [];
  archives = new Map();
  Astatus = false;

  ionViewWillEnter() {
    // Uploading research papers by different authors

    this.publicationService.getResearch().subscribe(info => {
      let research_length = info.length;

      for (let i = 0; i < research_length; i++) {
        this.research_name.push(info[i]["research_papers"][0]);
      }

      this.Rstatus = true;
    });

    this.publicationService.getBulletins().subscribe(info => {
      let bulletin_length = info["bulletins"].length;

      console.log(bulletin_length)

      for (let i = 0; i < bulletin_length; i++) {
        this.bulletin_name.push(info["bulletins"][i]); 
        this.bulletin_data.push(info["writer"][i]); 
      }

      // console.log(this.bulletin_name)
      console.log(this.bulletin_data)


      this.Bstatus = true;
    });

    this.publicationService.getExtension().subscribe(info => {
      let extension_length = info["extension"].length;

      console.log(extension_length)

      for (let i = 0; i < extension_length; i++) {
        this.extension_name.push(info["extension"][i]); 
        this.extension_data.push(info["writer"][i]); 
      }

      // console.log(this.bulletin_name)
      console.log(this.extension_name)


      this.Estatus = true;
    });

    this.publicationService.getBooks().subscribe(info => {
      let books_length = info["books"].length;
      let books_pdf = info["PDFs"].length;

      console.log(books_length)

      for (let i = 0; i < books_length; i++) {
        this.books_name.push(info["books"][i]); 
       
      }

      for (let i = 0; i < books_pdf; i++) {
        this.books_data.push(info["PDFs"][i]); 
      }

      // console.log(this.bulletin_name)
      console.log(this.books_name)


      this.BUstatus = true;
    });

    this.publicationService.getNewsletter().subscribe(info => {
      let newsLetter_length = info["books"].length;
      

      console.log(newsLetter_length)

      for (let i = 0; i < newsLetter_length; i++) {
        this.newsLetter_name.push(info["books"][i]); 
        this.newsLetter_data.push(info["PDFs"][i]); 
       
      }

      // console.log(this.bulletin_name) NRCL - लिचीमा राजभाषा पत्रिका
      console.log(this.books_name)


      this.NEstatus = true;
    });

    this.publicationService.getPatrika().subscribe(info => {
      let patrika_length = info["patrika"].length;
      

      console.log(patrika_length)

      for (let i = 0; i < patrika_length; i++) {
        this.patrika_name.push(info["patrika"][i]); 
        this.patrika_data.push(info["PDFs"][i]); 
       
      }

      // console.log(this.bulletin_name) NRCL - लिचीमा राजभाषा पत्रिका
      console.log(this.patrika_name)


      this.Pstatus = true;
    });

    this.publicationService.getArchives().subscribe(info => {
      let archives_length = info["archives"].length;
      

      console.log(archives_length)

      for (let i = 0; i < archives_length; i++) {
        this.archives_name.push(info["archives"][i]); 
        this.archives_data.push(info["PDFs"][i]); 
       
      }

      // console.log(this.bulletin_name) NRCL - लिचीमा राजभाषा पत्रिका
      console.log(this.archives_name)


      this.Astatus = true;
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
