import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HgConsoleFinancesApiResponse, HgConsoleFinancesResults } from './hg-console-finances.model';

@Injectable({
  providedIn: 'root'
})
export class HgConsoleFinancesService {
  private credentials:{ apiKey:string; endpoint:string; } = environment.hgConsole.finances;
  constructor(
    private http:HttpClient
  ) { }
  private getHGConsoleUrl():string{
    let url = `${this.credentials.endpoint}?key=${this.credentials.apiKey}`;
    return url;
  }
  getFinances():Promise<HgConsoleFinancesResults>{
    return new Promise((resolve, reject)=>{
      let url = this.getHGConsoleUrl();
      this.http.get(url).subscribe((response:HgConsoleFinancesApiResponse)=>{
        resolve(response.results);
      }, (error:HttpErrorResponse)=>{
        reject(new Error(error.message));
      });
    });  
  }
}
