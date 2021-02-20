import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


export interface HgConsoleApiResponse<T>{
    by:string;
    valid_key:boolean;
    results:T;
    execution_time:number;
    from_cache:boolean;
}


@Injectable({
    providedIn: 'any'
})
export class HgConsoleApi{
    private endpoint:string = "https://api.hgbrasil.com";
    private apiKey:string = environment.hgConsole.apiKey;
    private format:string = 'json-cors';
    private paths:string[] = [];
    constructor(
        private http:HttpClient
    ){
    }
    getUrl(){
        let url = [this.endpoint, this.getPaths()].join('/');
        return `${url}?format=${this.format}&key=${this.apiKey}`;
    }
    setPath(path:string){
        this.paths.push(path);
        return this;
    }
    private getPaths(){
        return this.paths.join('/');
    }
    get<T>():Promise<T>{
        return new Promise((resolve, reject)=>{
            let url = this.getUrl();
            this.http.get(url).subscribe((response:HgConsoleApiResponse<T>)=>{
                resolve(response.results);
            }, (error:HttpErrorResponse)=>{
                reject(new Error(error.message));
            });
        });
    }
}