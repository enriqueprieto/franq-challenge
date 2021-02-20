import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HgConsoleFinances, HgConsoleFinancesCurrenciesOptions } from '../../../finances';

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
@Component({
  selector: 'hg-console-finances-currencies-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class HgConsoleFinancesCurrenciesListComponent implements OnInit {
  @Input('slideConfig') slideConfig:SlideConfig = {

  };
  @Input('items') items:HgSectionItem<HgConsoleFinancesCurrenciesOptions>[] = [];
  @Output('onClickItem') onClickItem:EventEmitter<HgSectionItem<HgConsoleFinancesCurrenciesOptions>> = new EventEmitter();
  constructor(
    public hgConsoleFinances:HgConsoleFinances
  ) { }

  ngOnInit() {}
  convertValueInBrl(value:number){
    return value.toLocaleString('pt-br', { maximumFractionDigits: 2 });
  }
  convertValueInDollar(value:number){
    return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
  }
  convertVariation(value:number){
    return value.toLocaleString('pt-br', { maximumFractionDigits: 3 });
  }
  onItemClick(item:HgSectionItem<HgConsoleFinancesCurrenciesOptions>){
    this.onClickItem.emit(item);
  }
}
