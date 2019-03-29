import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PublicationPage } from '../../pages/publication/publication'
import { AlertController } from 'ionic-angular';


/*
  Generated class for the PublicationServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PublicationServicesProvider {

  constructor(private alertCtrl: AlertController,public http: Http) {}

  getResearch(){
  
    return this.http.get(`https://icarserver.herokuapp.com/research_papers`).map(res =>res.json()); 
  
  }

}
