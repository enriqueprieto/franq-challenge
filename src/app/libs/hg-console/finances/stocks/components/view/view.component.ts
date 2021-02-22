import { Component, Input, OnInit } from '@angular/core';
import { Components } from '@ionic/core';
import { HgConsoleFinances, HgConsoleFinancesStocksOptions } from '../../../finances';

interface HgSectionItem<T>{
  name:string;
  data:T;
}

@Component({
  selector: 'hg-console-finances-stocks-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class HgConsoleFinancesStocksViewComponent implements OnInit {
  @Input() modal:Components.IonModal;
  @Input('stock') stock:HgSectionItem<HgConsoleFinancesStocksOptions>;
  constructor(
    public hgConsoleFinances:HgConsoleFinances
  ) { }

  ngOnInit() {}
  async back(){
    return await this.modal.dismiss();
  }
}
