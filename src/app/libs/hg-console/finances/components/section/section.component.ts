import { Component, Input, OnInit } from '@angular/core';

interface HgSectionSlideConfig{
  slidesPerView?:number|'auto';
  watchOverflow?:boolean;
  spaceBetween?:number;
  breakpoints?:{[key:string]:HgSectionSlideConfig};
}
interface HgSectionItem<T>{
  name:string;
  data:T;
}
interface HgSection<T>{
  slideConfig:HgSectionSlideConfig;
  items:HgSectionItem<T>[];
}

@Component({
  selector: 'hg-console-finances-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class HgConsoleFinancesSectionComponent implements OnInit {
  @Input('title') title:string;
  @Input('slideConfig') slideConfig:HgSectionSlideConfig = {};
  constructor() { }

  ngOnInit() {}

}
