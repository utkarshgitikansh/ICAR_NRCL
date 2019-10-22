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
  notice_data = new Map();
  notice = new Map();
  Nstatus = false;

  news_data = new Map();
  news = new Map();
  Nestatus = false;


  tenders_data = new Map();
  tenders = new Map();
  Tstatus = false;

  recruits_data = new Map();
  recruit = new Map();
  Rstatus = false;

  events_data = new Map();
  event = new Map();
  Estatus = false;


  links_data = new Map();
  link = new Map();
  Lstatus = false;


  corners_data = new Map();
  corner = new Map();
  Cstatus = false;

  constructor(public navCtrl: NavController, private updatesService : UpdatesServicesProvider) {
  }

  ionViewWillEnter(){

      // Uploading notices

      this.updatesService.getNotices().subscribe(info => {
      
      let notice_length = info.notices_name.length;   // half the number of notices 
     
      

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



    // Uploading news and events

    this.updatesService.getNews().subscribe(info => {
      
      let news_length = info.news_name.length;   // half the number of notices 
     
      

      for (let i = 0; i < news_length; i = i+2) {
        
        //this.notice_name.push(info.notices_name[i]);
        let name : String = info.news_name[i];
        let url : String = info.news_name[i+1];
        this.news_data.set(name,url);

        //console.log(this.notice_data.values)
       
        }
        
        this.news = this.news_data;
        console.log(this.news);
        this.Nestatus = true;

    });

    // Uploading tenders

    this.updatesService.getTenders().subscribe(info => {
      
      let tenders_length = info.tender_name.length;   // half the number of notices 
     
      

      for (let i = 0; i < tenders_length; i = i+2) {
        
        //this.notice_name.push(info.notices_name[i]);
        let name : String = info.tender_name[i];
        let url : String = info.tender_name[i+1];
        this.tenders_data.set(name,url);

        //console.log(this.notice_data.values)
       
        }
        
        this.tenders = this.tenders_data;
        console.log(this.tenders);
        this.Tstatus = true;

    });

    // Uploading recruitments

    this.updatesService.getRecruits().subscribe(info => {
      
      let recruits_length = info.recruit_name.length;   // half the number of notices 
     
      

      for (let i = 0; i < recruits_length; i = i+2) {
        
        //this.notice_name.push(info.notices_name[i]);
        let name : String = info.recruit_name[i];
        let url : String = info.recruit_name[i+1];
        this.recruits_data.set(name,url);

        //console.log(this.notice_data.values)
       
        }
        
        this.recruit = this.recruits_data;
        console.log(this.recruit);
        this.Rstatus = true;

    });

        // Uploading events

        this.updatesService.getEvents().subscribe(info => {
      
          let events_length = info.event_name.length;   // half the number of notices 
         
          
    
          for (let i = 0; i < events_length; i = i+2) {
            
            //this.notice_name.push(info.notices_name[i]);
            let name : String = info.event_name[i];
            let url : String = info.event_name[i+1];
            this.events_data.set(name,url);
    
            //console.log(this.notice_data.values)
           
            }
            
            this.event = this.events_data;
            console.log(this.event);
            this.Estatus = true;
    
        });

          // Important Links

          this.updatesService.getLinks().subscribe(info => {
      
            let links_length = info.link_name.length;   // half the number of notices 
           
            
      
            for (let i = 0; i < links_length; i = i+2) {
              
              //this.notice_name.push(info.notices_name[i]);
              let name : String = info.link_name[i];
              let url : String = info.link_name[i+1];
              this.links_data.set(name,url);
      
              //console.log(this.notice_data.values)
             
              }
              
              this.link = this.links_data;
              console.log(this.link);
              this.Lstatus = true;
      
          });

           // Important Links

           this.updatesService.getCorners().subscribe(info => {
      
            let links_length = info.corner_name.length;   // half the number of notices 
           
            
      
            for (let i = 0; i < links_length; i = i+2) {
              
              //this.notice_name.push(info.notices_name[i]);
              let name : String = info.corner_name[i];
              let url : String = info.corner_name[i+1];
              this.corners_data.set(name,url);
      
              //console.log(this.notice_data.values)
             
              }
              
              this.corner = this.corners_data;
              console.log(this.corner);
              this.Cstatus = true;
      
          });

  }

}
