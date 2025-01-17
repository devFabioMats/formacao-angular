import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoRoutingModule } from './cursos/cursos-routing.module';
import { AlunosModule } from './alunos/alunos.module';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
// import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    AlunoFormComponent,
    // AlunosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CursoRoutingModule, AlunosModule],
  providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
