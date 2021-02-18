import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticateGuard implements CanActivate{
    constructor(
        private router:Router
    ){}
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        try {
            
            return true;
        } catch (error) {
            this.router.navigateByUrl('/login');
            return false;   
        }
    }
}