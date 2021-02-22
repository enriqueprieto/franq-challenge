import { Component, OnInit } from '@angular/core';
import { AlertController, IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { HgConsoleFinancesBitcoinsViewComponent } from '../libs/hg-console/finances/bitcoins/components/view/view.component';
import { HgConsoleFinancesCurrenciesViewComponent } from '../libs/hg-console/finances/currencies/components/view/view.component';
// import { CurrencesViewComponent } from '../libs/currences/currences-view/currences-view.component';
import { HgConsoleFinances, HgConsoleFinancesBitcoins, HgConsoleFinancesBitcoinsOptions, HgConsoleFinancesCurrencies, HgConsoleFinancesCurrenciesOptions, HgConsoleFinancesResults, HgConsoleFinancesStocks, HgConsoleFinancesStocksOptions  } from '../libs/hg-console/finances/finances';
import { HgConsoleFinancesStocksViewComponent } from '../libs/hg-console/finances/stocks/components/view/view.component';
import { AuthService } from '../services/auth/auth.service';
import { ProfileComponent } from './profile/profile.component';

interface SlideConfig{
  slidesPerView?:number|'auto';
  watchOverflow?:boolean;
  spaceBetween?:number;
  breakpoints?:{[key:string]:SlideConfig};
}
interface HgSectionItem<T>{
  name:string;
  data:T;
}
interface HgSection<T>{
  slideConfig:SlideConfig;
  items:HgSectionItem<T>[];
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  hgConsoleFinanceData:HgConsoleFinancesResults = null;
  currencies:HgSection<HgConsoleFinancesCurrenciesOptions> = {
    slideConfig: {
      slidesPerView: 3.1,
      spaceBetween: 10,
      watchOverflow: true,
      breakpoints: {
        320:{
          slidesPerView: 1.1,
        },
        480:{
          slidesPerView: 2.1
        },
        768: {
          slidesPerView: 3.1
        }
      }
    },
    items: []
  };
  stocks:HgSection<HgConsoleFinancesStocksOptions> = {
    slideConfig: {
      spaceBetween: 10,
      watchOverflow: true,
      breakpoints:{
        320: {
          slidesPerView: 1.1
        },
        480: {
          slidesPerView: 2.1
        },
        768: {
          slidesPerView: 3.1
        }
      }
    },
    items: []
  };
  bitcoins:HgSection<HgConsoleFinancesBitcoinsOptions> = {
    slideConfig: {
      spaceBetween: 10,
      watchOverflow: true,
      breakpoints:{
        320: {
          slidesPerView: 1.1
        },
        480: {
          slidesPerView: 2.1
        },
        768: {
          slidesPerView: 3.1
        }
      }
    },
    items: []
  };
  hgConsoleLoading:boolean = false;
  user:firebase.default.User;
  constructor(
    // private hgConsoleFinance:HgConsoleFinancesService,
    private alertCtrl:AlertController,
    private authService:AuthService,
    private modalCtrl:ModalController,
    private hgConsoleFinance:HgConsoleFinances,
    private routerOutlet:IonRouterOutlet,
    private navCtrl:NavController
  ) {}
  ngOnInit(): void {
    this.initialize();
  }
  async initialize(){
    try {
      this.hgConsoleFinanceData = await this.hgConsoleLoadData();  
      this.currencies.items = this.convertHGDataToCurrencies(this.hgConsoleFinanceData.currencies);
      this.stocks.items = this.convertHGDataToStocks(this.hgConsoleFinanceData.stocks);
      this.bitcoins.items = this.convertHGDataToBitcoins(this.hgConsoleFinanceData.bitcoin);
      this.user = await this.authService.getCurrentUser();
    } catch (error) {
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
  async hgConsoleLoadData(){
    this.hgConsoleLoading = true;
    let response = await this.hgConsoleFinance.get();
    this.hgConsoleLoading = false;
    return response;
  }
  convertHGDataToCurrencies(currencies:HgConsoleFinancesCurrencies){
    let keys = Object.keys(currencies),
        items:HgSectionItem<HgConsoleFinancesCurrenciesOptions>[] = [];
    keys.forEach((key)=>{
      if(typeof currencies[key] != 'string'){
        items.push({
          name: key,
          data: currencies[key]
        });
      }
    });
    return items;
  }
  convertHGDataToStocks(stocks:HgConsoleFinancesStocks){
    let keys = Object.keys(stocks),
        items:HgSectionItem<HgConsoleFinancesStocksOptions>[] = [];
    keys.forEach((key)=>{
      if(typeof stocks[key] != 'string'){
        items.push({
          name: key,
          data: stocks[key]
        });
      }
    });
    return items;
  }
  convertHGDataToBitcoins(bitcoins:HgConsoleFinancesBitcoins){
    let keys = Object.keys(bitcoins),
        items:HgSectionItem<HgConsoleFinancesBitcoinsOptions>[] = [];
    keys.forEach((key)=>{
      if(typeof bitcoins[key] != 'string'){
        items.push({
          name: key,
          data: bitcoins[key]
        });
      }
    });
    return items;
  }
  convertValue(value:number){
    return value.toLocaleString('pt-br', { maximumFractionDigits: 2 });
  }
  convertValueInDollar(value:number){
    return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
  }
  convertVariation(value:number){
    return value.toLocaleString('pt-br', { maximumFractionDigits: 3 });
  }
  async openModalCurrence(currencie:HgSectionItem<HgConsoleFinancesCurrenciesOptions>){
    let modal = await this.modalCtrl.create({
      component: HgConsoleFinancesCurrenciesViewComponent,
      componentProps: {
        currencie
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      cssClass: ['modal-custom']
    });
    return await modal.present();
  }
  async openModalStock(stock:HgSectionItem<HgConsoleFinancesStocksOptions>){
    let modal = await this.modalCtrl.create({
      component: HgConsoleFinancesStocksViewComponent,
      componentProps: {
        stock
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      cssClass: ['modal-custom']
    });
    return await modal.present();
  }
  async openModalBitcoin(bitcoin:HgSectionItem<HgConsoleFinancesBitcoinsOptions>){
    let modal = await this.modalCtrl.create({
      component: HgConsoleFinancesBitcoinsViewComponent,
      componentProps: {
        bitcoin
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      cssClass: ['modal-custom']
    });
    return await modal.present();
  }
  async openModalProfile(){
    let modal = await this.modalCtrl.create({
      component: ProfileComponent,
      componentProps: {
        user: this.user
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      cssClass: ['modal-custom']
    });
    modal.onDidDismiss().then((res)=>{
      if(res.data){
        this.navCtrl.navigateForward('/login');
      }
    })
    return await modal.present();
  }
}
