import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController,Loading,
  LoadingController,Alert,
  AlertController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { EmailValidator } from '../../validators/email';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  public signupForm: FormGroup; 
  public loading: Loading;


  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController,public alertCtrl: AlertController,formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
    email: [
    "",
    Validators.compose([Validators.required, EmailValidator.isValid])
    ],
    password: [
    "",
    Validators.compose([Validators.minLength(6), Validators.required])
    ]
    });
  }

  signupUser(): void {
    if (!this.signupForm.valid) {
    console.log(
    `Need to complete the form, current value: ${this.signupForm.value}`
    );
    } else {
    const email: string = this.signupForm.value.email;
    const password: string = this.signupForm.value.password;
    this.user.signupUser(email, password).then(
    user => {
    this.loading.dismiss().then(() => {
    this.navCtrl.setRoot(MainPage);
    });
    },
    error => {
    this.loading.dismiss().then(() => {
    const alert: Alert = this.alertCtrl.create({
    message: error.message,
    buttons: [{ text: "Ok", role: "cancel" }]
    });
    alert.present();
    });
    }
    );
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    }
    }
}
