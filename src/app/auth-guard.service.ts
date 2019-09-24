import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public jwtHelper: JwtHelperService, public router: Router) { }

  public isAuthenticated():boolean{
    const token = sessionStorage.getItem('token');
    const auth =  !this.jwtHelper.isTokenExpired(token)
    console.log(auth)
    return auth;
  }



  canActivate(): boolean {
    return this.isAuthenticated()
  }
}
