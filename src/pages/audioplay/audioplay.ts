import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
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
  currentTrack: any;
  progressInterval: any;
  file:MediaObject;
  questions:any[];
  constructor(public navCtrl: NavController,public media: Media,public _audioProvider: AudioProvider, public navParams: NavParams,public modalCtrl: ModalController) {
   this.file=this.media.create(this.navParams.get('audiof'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AudioplayPage');
    console.log(this.navParams.get('audiof'));
    console.log(this.navParams.get('audiokey'));
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
