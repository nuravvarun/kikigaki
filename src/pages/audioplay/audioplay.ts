import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { AudioProvider } from 'ionic-audio';
import { Media, MediaObject } from '@ionic-native/media';
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

  constructor(public navCtrl: NavController,public media: Media,private nativeAudio: NativeAudio,public _audioProvider: AudioProvider, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioplayPage');
    console.log(this.navParams.get('audiof'));
  }
  playSelectedTrack() {
    // use AudioProvider to control selected track 
    //this._audioProvider.play(this.navParams.get('audiof'));
    const file: MediaObject = this.media.create(this.navParams.get('audiof'));
    file.play();
  }
  
  pauseSelectedTrack() {
     // use AudioProvider to control selected track 
     this._audioProvider.pause(this.navParams.get('audiof'));
  }
         
  onTrackFinished(track: any) {
    console.log('Track finished', track)
  } 
}
