import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  getCursos() {
    return [
      { id: 1, nome: 'Angular 2' },
      { id: 2, nome: 'Java' },
      { id: 3, nome: 'Phonegap' },
      { id: 4, nome: 'Ionic' },
      { id: 5, nome: 'MongoDB' },
      { id: 6, nome: 'NodeJS' },
      { id: 7, nome: 'Bootstrap' },
      { id: 8, nome: 'HTML5' },
      { id: 9, nome: 'Sass' },
      { id: 10, nome: 'JavaScript' }
    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }


  constructor() { }
}
