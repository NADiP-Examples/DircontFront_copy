import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AuthService } from './auth.service';


@Injectable()
export class isLoggedIn implements CanActivate {

  constructor (private router: Router, private AuthService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    if (!this.AuthService.isLoggedIn()) {
      this.router.navigate(['signin']);
      return false;
    }
    return true;
  }
}

@Injectable()
export class isLoggedOut implements CanActivate {

  constructor (private router: Router, private AuthService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
    if (this.AuthService.isLoggedIn()) {
      this.router.navigate(['profile']);
      return false;
    }
    return true;
  }
}
