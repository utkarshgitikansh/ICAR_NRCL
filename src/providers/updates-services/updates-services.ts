import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { UpdatesPage } from '../../pages/updates/updates'
import { AlertController } from 'ionic-angular';

/*
  Generated class for the UpdatesServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpdatesServicesProvider {

  constructor(private alertCtrl: AlertController,public http: Http) {}

getNotices(){
   
    return this.http.get(`https://icarserver.herokuapp.com/notices`).map(res =>res.json()); 

    }

}
