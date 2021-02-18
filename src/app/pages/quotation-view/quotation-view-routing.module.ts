import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotationViewPage } from './quotation-view.page';

const routes: Routes = [
  {
    path: '',
    component: QuotationViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotationViewPageRoutingModule {}
