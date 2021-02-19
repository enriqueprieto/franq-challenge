import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthModel } from 'src/app/services/auth/auth.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  auth:AuthModel = {
    email: null,
    password: null,
    passwordConfirm: null
  };
  constructor(
    private navCtrl:NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService:AuthService
  ) { }

  ngOnInit() {
  }
  validateEmail(email:string){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  ready():boolean{
    if(!this.auth.email){
      return false;
    }
    if(!this.validateEmail(this.auth.email)){
      return false;
    }
    if(!this.auth.password){
      return false;
    }
    if(!this.auth.passwordConfirm){
      return false;
    }
    if(this.auth.password != this.auth.passwordConfirm){
      return false;
    }
    return true;
  }
  async submit(){
    let loading = await this.loadingCtrl.create({
      message: 'Criando sua conta, aguarde...'
    });
    try { 
      await loading.present();
      let credentials:firebase.default.auth.UserCredential = await this.authService.createUserWithEmailAndPassword(this.auth);
      await this.authService.saveUserInStorage(credentials.user);
      await loading.dismiss();
      return await this.navigateToHome();
    } catch (error) {
      await loading.dismiss();
      return await this.printAlertError(error);
    }
  }
  async printAlertError(error:Error){
    let alert = await this.alertCtrl.create({
      header: 'Ops :(',
      subHeader: 'Algo não esperado aconteceu.',
      message: error.message,
      buttons: ['Ok']
    });
    return await alert.present();
  }
  async navigateToLogin(){
    return await this.navCtrl.navigateBack('/login');
  }
  async navigateToHome(){
    return await this.navCtrl.navigateRoot('/home');
  }
}
