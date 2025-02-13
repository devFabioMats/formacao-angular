import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        console.log('Resolver Guard - AlunoDetalheResolver');
        let id = route.params['id'];
        return this.alunosService.getAluno(id);
  }
}