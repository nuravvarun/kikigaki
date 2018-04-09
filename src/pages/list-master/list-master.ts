import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController,Platform  } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { ContentPage } from '../../pages/content/content';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html',
   
})
export class ListMasterPage {
  audiosRef    : AngularFirestoreCollection<any>;
  audios: Observable<any[]>; 
  constructor(public navCtrl: NavController,  private platform  : Platform , public modalCtrl: ModalController, angFire   : AngularFirestore) {
  this.audiosRef = angFire.collection('audio_1');
  this.audios=this.audiosRef.valueChanges();
  }

  /**
   * The view loaded, let's query our items for the list
   */

}