import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    console.log(route);
    console.log(state);

    if (state.url.includes('editar')) {
      alert('Usuário sem acesso');
      return of(false);
    }

    return true;
  }
}
