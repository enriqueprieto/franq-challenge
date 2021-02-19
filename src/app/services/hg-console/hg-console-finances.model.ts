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
export interface HgConsoleFinancesApiResponse{
    by:string;
    valid_key:boolean;
    results:HgConsoleFinancesResults;
    execution_time:number;
    from_cache:boolean;
}