import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Components } from '@ionic/core';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() modal:Components.IonModal;
  @Input('user') user:firebase.default.User;
  userClone:firebase.default.User;
  constructor(
    private authService:AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl:LoadingController
  ) { }

  ngOnInit() {
    this.userClone = JSON.parse(JSON.stringify(this.user));
  }
  isDiff(){
    return JSON.stringify(this.user) != JSON.stringify(this.userClone);
  }
  async save(){
    let loading = await this.loadingCtrl.create({
      message: 'Atualizando perfil...'
    });
    try {
      await loading.present();
      await this.authService.updateProfile(this.userClone);
      this.user = this.userClone;
      await loading.dismiss();
      return this.back();
    } catch (error) {
      await loading.dismiss();
      return this.printAlertError(error);
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
  async back(res:boolean = false){
    return await this.modal.dismiss(res);
  }
  async logOut(){
    let loading = await this.loadingCtrl.create({
      message: 'Saindo do seu perfil...'
    });
    try {
      await loading.present();
      await this.authService.signOut();
      await loading.dismiss();
      return this.back(true);
    } catch (error) {
      await loading.dismiss();
      return this.printAlertError(error);
    }
  }
}
