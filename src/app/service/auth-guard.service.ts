import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private _authService: AuthService, private _router: Router) {}
  // next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  canActivate( ): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.getToken()) {
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }
}
