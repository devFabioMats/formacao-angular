import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'login', component: LoginComponent },
];

 @NgModule({
  declarations: [], 
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
 })
 export class AppRoutingModule {}
