import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstadoBr } from './../models/estado-br.model';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}

  getEstadosBr() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' },
    ];
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' },
      { nome: 'dotnet', desc: '.NET' },
      { nome: 'python', desc: 'Python' },
      { nome: 'c', desc: 'C' },
      { nome: 'csharp', desc: 'C#' },
      { nome: 'shell', desc: 'Shell Script' },
      { nome: 'typescript', desc: 'TypeScript' },
      { nome: 'angular', desc: 'Angular' },
      { nome: 'react', desc: 'React' },
      { nome: 'vue', desc: 'Vue' },
      { nome: 'node', desc: 'Node' },
      { nome: 'ember', desc: 'Ember' },
      { nome: 'meteor', desc: 'Meteor' },
      { nome: 'elixir', desc: 'Elixir' },
      { nome: 'scala', desc: 'Scala' },
      { nome: 'groovy', desc: 'Groovy' },
      { nome: 'lua', desc: 'Lua' },
      { nome: 'cobol', desc: 'Cobol' },
      { nome: 'pascal', desc: 'Pascal' },
      { nome: 'haskell', desc: 'Haskell' },
      { nome: 'perl', desc: 'Perl' },
      { nome: 'kotlin', desc: 'Kotlin' },
    ];
  }

  getNewsletter() {
    return [
      { valor: 'sim', desc: 'Sim' },
      { valor: 'nao', desc: 'Não' },
    ];
  }
}