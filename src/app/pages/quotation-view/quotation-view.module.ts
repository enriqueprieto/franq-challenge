import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotationViewPageRoutingModule } from './quotation-view-routing.module';

import { QuotationViewPage } from './quotation-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotationViewPageRoutingModule
  ],
  declarations: [QuotationViewPage]
})
export class QuotationViewPageModule {}
