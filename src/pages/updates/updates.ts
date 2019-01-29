import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UpdatesServicesProvider } from '../../providers/updates-services/updates-services'

@IonicPage()
@Component({
  selector: 'page-updates',
  templateUrl: 'updates.html',
})
export class UpdatesPage {

  notice_name = [];
  notice_url = [];
  notice_data = new Map();
  notice = new Map();

  Nstatus = false;

  constructor(public navCtrl: NavController, private updatesService : UpdatesServicesProvider) {
  }

  ionViewWillEnter(){

      this.updatesService.getNotices().subscribe(info => {
      
      let notice_length = info.notices_name.length;   // half the number of notices 
     
      // Uploading notices

      for (let i = 0; i < notice_length; i = i+2) {
        
        //this.notice_name.push(info.notices_name[i]);
        let name : String = info.notices_name[i];
        let url : String = info.notices_name[i+1];
        this.notice_data.set(name,url);

        //console.log(this.notice_data.values)
       
        }
        
        this.notice = this.notice_data;
        console.log(this.notice);
        this.Nstatus = true;

    });

  }

}
