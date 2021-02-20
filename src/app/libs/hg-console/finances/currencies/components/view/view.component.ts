import { Component, Input, OnInit } from '@angular/core';
import { Components } from '@ionic/core';
import { HgConsoleFinances, HgConsoleFinancesCurrenciesOptions } from '../../../finances';

interface HgSectionItem<T>{
  name:string;
  data:T;
}

@Component({
  selector: 'hg-console-finances-currencies-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class HgConsoleFinancesCurrenciesViewComponent implements OnInit {
  @Input() modal:Components.IonModal;
  @Input('currencie') currencie:HgSectionItem<HgConsoleFinancesCurrenciesOptions>;
  constructor(
    public hgConsoleFinances:HgConsoleFinances
  ) { }

  ngOnInit() {
    console.log(this.currencie);
  }
  async back(){
    return await this.modal.dismiss();
  }
}
