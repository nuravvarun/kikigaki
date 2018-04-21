import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController,Loading,
  LoadingController,Alert,
  AlertController ,MenuController} from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { EmailValidator } from '../../validators/email';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  public loginForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,formBuilder: FormBuilder,public menu: MenuController) {
        this.loginForm = formBuilder.group({
        email: [
        '',
        Validators.compose([Validators.required, EmailValidator.isValid])
        ],
        password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
        ]
        });

    
  }
  loginUser(): void {
    if (!this.loginForm.valid) {
    console.log(
    `Form is not valid yet, current value: ${this.loginForm.value}`
    );
    } else {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.user.loginUser(email, password).then(
    authData => {
    this.loading.dismiss().then(() => {
    this.navCtrl.setRoot(MainPage);
    });
    },
    error => {
    this.loading.dismiss().then(() => {
    const alert: Alert = this.alertCtrl.create({
    message: error.message,
    buttons: [{ text: 'Ok', role: 'cancel' }]
    });
    alert.present();
    });
    }
    );
    this.loading = this.loadingCtrl.create();
    this.loading.present();

    }
    this.menu.enable(true);
    }
  // Attempt to login in through our User service
}
