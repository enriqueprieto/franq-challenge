import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AuthService } from '../services/auth/auth.service';
import { HgConsoleFinancesModule } from '../libs/hg-console/finances/finances.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HgConsoleFinancesModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ProfileComponent],
  providers: [
    AuthService
  ]
})
export class HomePageModule {}
