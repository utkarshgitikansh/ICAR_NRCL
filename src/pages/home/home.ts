import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { HomeProvider } from "../../providers/home/home";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  // Home page text control area

  home_text_1 = "Welcome to National Research Centre on Litchi";
  home_text_2 = "An ISO 9001:2008 Certified Institute";
  home_text_3 = "The Institute";
  home_text_4 =
    "The ICAR-NRCL is premier national institute for conducting research and developments on litchi and provides leadership at national level. It also acts as a national repository of information on litchi production, processing, value addition, and provides consultancy services to end users. Currently, the Centre has 14 scientific, 3 Technical assistant, 8 administrative and 3 supporting staff against the sanctioned strength of 15 scientific, 14 technical, 12 administrative and 10 supporting staff. ";
  home_text_5 = "Director Message";
  home_text_6 =
    "Litchi is an important fruit crop of the country with tremendous domestic market and export potential. But it is specific to its soil and climatic preference. At present, the area of this fruit under cultivation is 84,000 hectares and production is 594,000 metric tonnes (NHB, 2015). The productivity of litchi is although better in India in comparison with its native country but still wide gap exists between present productivity level (7-8 tonnes/ha) and realizable potential productivity (14-15 tonnes/ha). Litchi contributes significantly to the growers’ economy in Bihar, West Bengal, Assam and Jharkhand states of India that accounts for 78% of the total production in the country. Bihar produces 40% of total litchi and occupies nearly 38% of the area in India. The ICAR-NRC for Litchi has the mandate to address the productivity gap through basic and strategic research in areas of crop improvement and genetic enhancement, development of sustainable production techniques and integrated pest management systems. ";
  home_text_7 =
    "भारतीय कृषि अनुसंधान परिषद  (Indian Council of Agricultural Research)";
  home_text_8 = "Indian Council of Agricultural Research";

  staff_name = [];
  staff_image = [];
  staff_desig = [];
  staff_mail = [];
  staff_mail2 = [];
  Sstatus = false;

  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private homeProvider: HomeProvider
  ) {}

  ngOnInit() {
    this.homeProvider.getStaff().subscribe(info => {
      let staff_length = info["name"].length;

      for (let i = 0; i < staff_length; i++) {
        this.staff_name.push(info["name"][i]);
        this.staff_image.push(info["image"][i]);
        this.staff_desig.push(info["desig"][i]);
      }

      // for (let i = 0; i < staff_length; i+2) {
      //   this.staff_mail.push(info["mail"][i]);
      //   this.staff_mail2.push(info["mail"][i+1]);
      // }
      console.log(this.staff_name);
      this.Sstatus = true;
    }); //End of ngOnInit
  }

  start() {
    window.open("https://www.youtube.com/watch?v=2Qpa6lTS87Y", "_system");
  }
}
