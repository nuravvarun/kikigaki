import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
/**
 * Generated class for the AudioplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audioplay',
  templateUrl: 'audioplay.html',
})
export class AudioplayPage {
  currentTrack: any;
  progressInterval: any;
  file:MediaObject;
  audiosRef    : AngularFirestoreCollection<any>;
  docRef:AngularFirestoreDocument<any>;
  quesRef:AngularFirestoreCollection<any>;
  questions: Observable<any>; 
  constructor(public navCtrl: NavController,public media: Media,angFire   : AngularFirestore,public _audioProvider: AudioProvider, public navParams: NavParams,public modalCtrl: ModalController) {
   this.file=this.media.create(this.navParams.get('audiof'));
   this.docRef=this.navParams.get('id');
   this.audiosRef = angFire.doc('audio_1/'+this.navParams.get('Id'))
                    .collection('qlist');
  
   this.questions=this.audiosRef.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioplayPage');
    console.log(this.navParams.get('audiof'));
    console.log(this.navParams.get('Id'));
  }
 
  playTrack(track) {
    this.file.play();
}
  pauseTrack(track){
    this.file.pause();
}

nextTrack(){}

prevTrack(){}

}
