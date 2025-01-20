import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../login/auth.service'; // Adjust the path as necessary
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const AlunosGuard: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  console.log('guarda de rota filha alunosssss');

  if (auth.verificaUsuarioAutenticado) {
    return true;
  }

  router.navigate(['/login']);

  return false;
};
