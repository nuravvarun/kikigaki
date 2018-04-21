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
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public angFire   : AngularFirestore) {
  this.audiosRef = angFire.collection('audio_1');
  this.audios = this.audiosRef.snapshotChanges().map( changes => {
    return changes.map(a => {
      const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id,...data};
    });
});

  }
audioTest(audiof:MediaObject,Id:string ,Name:string)
{
  
  let obj={audiof,Id:Id,Name:Name};
  let myModal = this.modalCtrl.create(AudioplayPage,obj);
  myModal.present();
  console.log(Id);
}


}
