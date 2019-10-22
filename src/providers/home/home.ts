import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PublicationPage } from '../../pages/publication/publication'
import { AlertController } from 'ionic-angular';


/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(private alertCtrl: AlertController,public http: Http) {
  
  }

  getStaff(){
  
    return this.http.get(`http://icarserver.herokuapp.com/staff`).map(res =>res.json()); 
  
  } 

}
