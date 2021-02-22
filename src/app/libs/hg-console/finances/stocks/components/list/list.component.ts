import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HgConsoleFinances, HgConsoleFinancesStocksOptions } from '../../../finances';

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
  selector: 'hg-console-finances-stocks-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class HgConsoleFinancesStocksListComponent implements OnInit {
  @Input('slideConfig') slideConfig:SlideConfig = {

  };
  @Input('items') items:HgSectionItem<HgConsoleFinancesStocksOptions>[] = [];
  @Output('onClickItem') onClickItem:EventEmitter<HgSectionItem<HgConsoleFinancesStocksOptions>> = new EventEmitter();
  constructor(
    public hgConsoleFinances:HgConsoleFinances
  ) { }

  ngOnInit() {}

  onItemClick(item:HgSectionItem<HgConsoleFinancesStocksOptions>){
    this.onClickItem.emit(item);
  }

}
