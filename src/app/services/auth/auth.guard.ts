import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthenticateGuard implements CanActivate{
    constructor(
        private router:Router,
        private Auth: AuthService
    ){}
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        try {
            let authState = await this.Auth.isAuthenticate();
            if(!authState){
                throw new Error('Not authenticate');
            }
            return true;
        } catch (error) {
            this.router.navigateByUrl('/login');
            return false;   
        }
    }
}