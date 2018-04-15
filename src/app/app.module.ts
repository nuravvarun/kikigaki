import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { NativeAudio } from '@ionic-native/native-audio';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { AudioplayPage } from '../pages/audioplay/audioplay';
import { Vibration } from '@ionic-native/vibration';
import {Media} from '@ionic-native/media';

import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';

export const firebaseConfig = {
  apiKey: "AIzaSyCYK_GRsKygHXQGXbPpPFUHC-XrAWBfMoM",
  authDomain: "kikigakiaudiosdb.firebaseapp.com",
  databaseURL: "https://kikigakiaudiosdb.firebaseio.com",
  projectId: "kikigakiaudiosdb",
  storageBucket: "kikigakiaudiosdb.appspot.com",
  messagingSenderId: "506828991311"
};
export function myCustomAudioProviderFactory() {
  return (window.hasOwnProperty('cordova')) ? new CordovaMediaProvider() : new WebAudioProvider();
}



// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    AudioplayPage,
    ProgressBarComponent 
  ],
  imports: [
  
    WelcomePageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AudioplayPage
  ],
  providers: [
    
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    Media,
    StatusBar,
    Vibration,
    NativeAudio,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
