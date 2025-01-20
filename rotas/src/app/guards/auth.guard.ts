import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../login/auth.service'; // Adjust the path as necessary
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  console.log('Guarda de Rota: PAI - Autenticação');

  if (auth.verificaUsuarioAutenticado) {
    return true;
  }

  alert('Usuário sem acesso');
  router.navigate(['/login']);
  return false;
};
