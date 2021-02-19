import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
import { AuthModel } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth:AngularFireAuth,
    private storage:Storage
  ) { }
  getUserAuth():Promise<firebase.default.User>{
    return new Promise((resolve, reject)=>{
      this.fireAuth.onAuthStateChanged((user:firebase.default.User)=>{
        resolve(user);
      }, (error:firebase.default.auth.AuthError)=>{
        reject(new Error(error.message));
      })
    });
  }
  async getCurrentUser(){
    let authState = await this.getUserAuth();
    if(!authState){
      await this.clearUserInStorage();
    }else{
      await this.saveUserInStorage(authState);
    }
    return authState;
  }
  async isAuthenticate():Promise<boolean>{
    let userAuth = await this.getUserAuth();
    if(!userAuth){
      return false;
    }
    return true;
  }
  createUserWithEmailAndPassword(auth:{email:string, password:string}){
    return this.fireAuth.createUserWithEmailAndPassword(auth.email, auth.password);
  }
  signInWithEmailAndPassword(auth:AuthModel){
    return this.fireAuth.signInWithEmailAndPassword(auth.email, auth.password);
  }
  signOut(){
    return this.fireAuth.signOut();
  }
  private clearUserInStorage(){
    return this.storage.remove('auth:state');
  }
  async saveUserInStorage(user:any){
    return await this.storage.set('auth:state', JSON.stringify(user));
  }
  async getUserFromStorage(){
    let userFromStorage = await this.storage.get('auth:state');
    if(!userFromStorage){
      return null;
    }
    return JSON.parse(userFromStorage);
  }
}
