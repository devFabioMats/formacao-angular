import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { authGuard } from '../guards/auth.guard';

const cursoRoutes: Routes = [
  { path: 'cursos', component: CursosComponent, canActivate: [authGuard] },
  { path: 'curso/:id', component: CursoDetalheComponent, canActivate: [authGuard] },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent, canActivate: [authGuard] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(cursoRoutes)],
  exports: [RouterModule],
})
export class CursoRoutingModule {}
