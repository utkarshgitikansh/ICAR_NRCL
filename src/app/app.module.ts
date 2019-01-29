import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { PublicationPage } from '../pages/publication/publication';
import { UpdatesPage } from '../pages/updates/updates';
import { ResearchPage } from '../pages/research/research';
import { SettingProvider } from '../providers/setting/setting';
import { UpdatesServicesProvider } from '../providers/updates-services/updates-services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    TabsPage,
    PublicationPage,
    UpdatesPage,
    ResearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomePage,
    ContactPage,
    TabsPage, 
    PublicationPage,
    ResearchPage,
    UpdatesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingProvider,
    UpdatesServicesProvider
  ]
})
export class AppModule {}