import { Injectable } from "@angular/core";
import { HgConsoleApi } from "../api/api";

export interface HgConsoleFinancesCurrenciesOptions{
    name:string; 
    buy:number; 
    sell:number; 
    variation:number; 
}
export interface HgConsoleFinancesCurrencies{
    [key:string]:HgConsoleFinancesCurrenciesOptions;
}
export interface HgConsoleFinancesBitcoinsOptions{ 
    name:string; 
    last:number; 
    sell:number; 
    variation:number; 
    format:string[]; 
    buy:number; 
}
export interface HgConsoleFinancesBitcoins{
    [key:string]:HgConsoleFinancesBitcoinsOptions;
}
export interface HgConsoleFinancesStocksOptions{
    name:string; 
    location:string; 
    variation:number; 
}
export interface HgConsoleFinancesStocks{
    [key:string]:HgConsoleFinancesStocksOptions
}
export interface HgConsoleFinancesTaxes{
    cdi:number; 
    cdi_daily:number; 
    daily_factor:number; 
    date:string; 
    selic:number; 
    selic_daily:number;
}

export interface HgConsoleFinancesResults{
    available_sources?:string[];
    bitcoin?:HgConsoleFinancesBitcoins;
    currencies?:HgConsoleFinancesCurrencies;
    stocks?:HgConsoleFinancesStocks;
    taxes?:HgConsoleFinancesTaxes[];
}

@Injectable({
    providedIn: 'any'
})
export class HgConsoleFinances{
    constructor(private api:HgConsoleApi){
        this.api.setPath('finance');
    }
    get(){
        return this.api.get<HgConsoleFinancesResults>();
    }
    convertValueInBrl(value:number){
        return value.toLocaleString('pt-br', { maximumFractionDigits: 2 });
    }
    convertValueInDollar(value:number){
        return value.toLocaleString('en-US', { maximumFractionDigits: 2 });
    }
    convertVariation(value:number){
        return value.toLocaleString('pt-br', { maximumFractionDigits: 3 });
    }
}