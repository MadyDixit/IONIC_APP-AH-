import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any {
      console.log('CanActivate called');
    let isLoggedIn = this.authService.isAuthenticated();
    console.log(isLoggedIn);
    if (isLoggedIn){
      return true
    } else {
      this.router.navigate(['']);
    }
  }
  
}