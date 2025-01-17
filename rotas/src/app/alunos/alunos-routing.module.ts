import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';


const alunosRoutes: Routes = [
  { path: 'alunos', component: AlunosComponent, children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormComponent },
    ]}
];

@NgModule({
    imports: [ CommonModule ,RouterModule.forChild(alunosRoutes) ],
    exports: [ RouterModule ],
    declarations: [],
    bootstrap: [],
})
export class AlunosRoutingModule { }
