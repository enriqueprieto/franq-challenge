import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthenticateOffGuard implements CanActivate{
    constructor(
        private router:Router,
        private Auth: AuthService
    ){}
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        try {
            let authState = await this.Auth.isAuthenticate();
            if(authState){
                throw new Error('Is authenticate');
            }
            return true;
        } catch (error) {
            this.router.navigateByUrl('/home');
            return false;   
        }
    }
}