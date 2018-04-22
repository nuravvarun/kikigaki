import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController} from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';
import { PopoverController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Options } from './options';
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

  selectedOption:Options;
 options = [
        new Options(1, 'True' ),
        new Options(2, 'False' ),
     ];
  
  currentTrack: any;
  title:string;
  modalTitle:'';
  progressInterval: any;
  file:MediaObject;
  audiosRef    : AngularFirestoreCollection<any>;
  docRef:AngularFirestoreDocument<any>;
  quesRef:AngularFirestoreCollection<any>;
  questions: Observable<any>; 
  constructor(public popoverCtrl: PopoverController,public navCtrl: NavController, 
    public viewCtrl: ViewController,public translateService: TranslateService,
    public media: Media,angFire: AngularFirestore,
    public _audioProvider: AudioProvider, 
    public navParams: NavParams,
    public modalCtrl: ModalController,formBuilder: FormBuilder) {
    

  this.title=this.navParams.get('Name'); 
  this.file=this.media.create(this.navParams.get('audiof'));
    
   this.audiosRef = angFire.doc('audio_1/'+this.navParams.get('Id'))
                    .collection('qlist');
  
   this.questions=this.audiosRef.valueChanges();
   
  }
  presentPopover(myEvent) {
    //let popover = this.popoverCtrl.create();
    //popover.present({
    //  ev: myEvent
   // });
  }
dismiss()
{
  this.viewCtrl.dismiss();
}

getValue(optionid) {
    this.selectedOption = this.options.filter((item)=> item.id == optionid)[0];
}
submitpaper(){
  if(this.selectedOption.id=this.options[0].id){
    console.log('working');

  }else{console.log('not working');}

}
  ionViewDidLoad() {
    

    console.log(this.navParams.get('audiof'));
    console.log(this.navParams.get('Id'));
    console.log(this.navParams.get('Name'));
  }
  select(value) {
    console.log(value);
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
