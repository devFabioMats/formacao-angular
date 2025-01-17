import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursoRoutes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(cursoRoutes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {}
