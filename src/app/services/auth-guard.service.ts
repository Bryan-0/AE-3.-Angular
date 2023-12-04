import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private _authService: AuthService, private router: Router) {}

  public canActivate(): boolean {
    if (!this._authService.estaAutenticadoBool) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
