import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';

import { AudioplayPage } from '../audioplay/audioplay';
import { FirebaseDatabase } from '@firebase/database-types';
import { MediaObject } from '@ionic-native/media';
import { User } from '@firebase/auth-types';
import { DocumentReference } from '@firebase/firestore-types';

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
  this.audios=this.audiosRef.snapshotChanges().map(actions =>{
    return actions.map(a=>{
        const id = a.payload.doc.id;
        return { id };
    })
  })
  this.audios=this.audiosRef.valueChanges();

  }
audioTest(audiof:MediaObject,id:AAGUID)
{

  let obj={audiof,id};
  let myModal = this.modalCtrl.create(AudioplayPage,obj);
  myModal.present();
  console.log(id);
}

}
