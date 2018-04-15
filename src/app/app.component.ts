import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';

import firebase from 'firebase';
import { User } from '../providers/providers';
import { WelcomePage } from '../pages/welcome/welcome';
import { Vibration } from '@ionic-native/vibration';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
    <ion-list>
      <button ion-item (click)="openPage(homePage)">
        About
      </button>
      <button ion-item (click)="openPage(friendsPage)">
        Settings
      </button>
      <button ion-item (click)="openPage(eventsPage)">
        Review Us
      </button>
      <button ion-item (click)="logoutUser()">
        Log Out
      </button>
    </ion-list>
     
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
 

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: 'TutorialPage' },
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Item Details', component: 'ItemDetailPage' },
    { title: 'Audio Player', component: 'AudioplayPage' }
    
  ]
  rootPage:any;  
  constructor(private vibration: Vibration, public menuCtrl: MenuController, public user: User,private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      this.statusBar.styleDefault();
      this.vibration.vibrate(1000);
      
    });

    firebase.initializeApp({
      apiKey: "AIzaSyCYK_GRsKygHXQGXbPpPFUHC-XrAWBfMoM",
      authDomain: "kikigakiaudiosdb.firebaseapp.com",
      databaseURL: "https://kikigakiaudiosdb.firebaseio.com",
      projectId: "kikigakiaudiosdb",
      storageBucket: "kikigakiaudiosdb.appspot.com",
      messagingSenderId: "506828991311"
    });

    this.initTranslate();
    
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
      this.rootPage = FirstRunPage;
      unsubscribe();
      } else {
      this.rootPage = 'TabsPage';
      unsubscribe();
      }
      });
    
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logoutUser(): Promise<void> {
    const userId: string = firebase.auth().currentUser.uid;
    firebase
    .database()
    .ref(`/userProfile/${userId}`)
    .off();
    this.nav.setRoot(WelcomePage);
    this.menuCtrl.close();
    return firebase.auth().signOut();
   

    }
}
