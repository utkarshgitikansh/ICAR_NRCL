import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {


// Home page text control area

home_text_1 = "Welcome to National Research Centre on Litchi" ;
home_text_2 = "An ISO 9001:2008 Certified Institute";
home_text_3 = "The Institute";
home_text_4 = "The ICAR-NRCL is premier national institute for conducting research and developments on litchi and provides leadership at national level. It also acts as a national repository of information on litchi production, processing, value addition, and provides consultancy services to end users. Currently, the Centre has 14 scientific, 3 Technical assistant, 8 administrative and 3 supporting staff against the sanctioned strength of 15 scientific, 14 technical, 12 administrative and 10 supporting staff. ";
home_text_5 = "Director Message";
home_text_6 = "Litchi is an important fruit crop of the country with tremendous domestic market and export potential. But it is specific to its soil and climatic preference. At present, the area of this fruit under cultivation is 84,000 hectares and production is 594,000 metric tonnes (NHB, 2015). The productivity of litchi is although better in India in comparison with its native country but still wide gap exists between present productivity level (7-8 tonnes/ha) and realizable potential productivity (14-15 tonnes/ha). Litchi contributes significantly to the growers’ economy in Bihar, West Bengal, Assam and Jharkhand states of India that accounts for 78% of the total production in the country. Bihar produces 40% of total litchi and occupies nearly 38% of the area in India. The ICAR-NRC for Litchi has the mandate to address the productivity gap through basic and strategic research in areas of crop improvement and genetic enhancement, development of sustainable production techniques and integrated pest management systems. ";
home_text_7 = "भारतीय कृषि अनुसंधान परिषद  (Indian Council of Agricultural Research)"
home_text_8 = "Indian Council of Agricultural Research"

constructor(private alertCtrl: AlertController, public navCtrl: NavController){}

ngOnInit() {
}//End of ngOnInit

start(){
  let alert = this.alertCtrl.create({
    title: 'ICAR-NRCL',
    subTitle: 'We believe in litchi!!',
    buttons: ['Close']
  });
  alert.present();
    }

}
