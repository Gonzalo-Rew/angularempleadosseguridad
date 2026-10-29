import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  Router,
  RouterStateSnapshot,
  MaybeAsync,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): MaybeAsync<GuardResult> {
    if (this._authService.hasValidToken()) {
      return true;
    } else {
      return this._router.createUrlTree(['/login'], {
        queryParams: { returnUrl: _state.url },
      });
    }
  }
}
