import { Component, Input, OnInit } from '@angular/core';
import { HgConsoleFinances, HgConsoleFinancesBitcoinsOptions } from '../../../finances';

import { Components } from '@ionic/core';

interface HgSectionItem<T>{
  name:string;
  data:T;
}

@Component({
  selector: 'hg-console-finances-bitcoins-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class HgConsoleFinancesBitcoinsViewComponent implements OnInit {
  @Input() modal:Components.IonModal;
  @Input('bitcoin') bitcoin:HgSectionItem<HgConsoleFinancesBitcoinsOptions>;
  constructor(
    public hgConsoleFinances:HgConsoleFinances
  ) { }

  ngOnInit() {
  }
  async back(){
    return await this.modal.dismiss();
  }

}
