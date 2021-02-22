import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HgConsoleFinances, HgConsoleFinancesBitcoinsOptions } from '../../../finances';

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
  selector: 'hg-console-finances-bitcoins-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class HgConsoleFinancesBitcoinsListComponent implements OnInit {
  @Input('slideConfig') slideConfig:SlideConfig = {

  };
  @Input('items') items:HgSectionItem<HgConsoleFinancesBitcoinsOptions>[] = [];
  @Output('onClickItem') onClickItem:EventEmitter<HgSectionItem<HgConsoleFinancesBitcoinsOptions>> = new EventEmitter();
  constructor(
    public hgConsoleFinances:HgConsoleFinances
  ) { }

  ngOnInit() {}
  onItemClick(item:HgSectionItem<HgConsoleFinancesBitcoinsOptions>){
    this.onClickItem.emit(item);
  }
}
