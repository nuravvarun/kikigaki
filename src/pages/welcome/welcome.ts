import { Component } from '@angular/core';
import { IonicPage, NavController,MenuController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController,public menu: MenuController) { }

 
  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }
  ionViewDidLeave() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(true);
  }
}
