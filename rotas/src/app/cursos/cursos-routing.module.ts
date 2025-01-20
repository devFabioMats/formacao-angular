import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from '../guards/auth.guard';
import { CursosGuard } from '../guards/cursos.guard';

const cursoRoutes: Routes = [
  {
    path: 'cursos',
    component: CursosComponent,
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
  },
  {
    path: 'curso/:id',
    component: CursoDetalheComponent,
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
  },
  {
    path: 'naoEncontrado',
    component: CursoNaoEncontradoComponent,
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(cursoRoutes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {}
