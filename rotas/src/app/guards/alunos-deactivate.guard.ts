import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {

  canDeactivate(
    component: AlunoFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('Guarda de desativação');

    return true;
  }
}
