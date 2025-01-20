import { CanActivateChildFn } from '@angular/router';

export const CursosGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
