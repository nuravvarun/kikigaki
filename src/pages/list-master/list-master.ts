import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController,Platform} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html',
   
})
export class ListMasterPage {
  audiosRef    : AngularFirestoreCollection<any>;
  audios: Observable<any[]>; 
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, angFire   : AngularFirestore) {
  this.audiosRef = angFire.collection('audio_1');
  this.audios=this.audiosRef.valueChanges();
  }
}