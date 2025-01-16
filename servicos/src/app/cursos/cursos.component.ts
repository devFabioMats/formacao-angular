import { Component } from '@angular/core';

import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  standalone: false,
  
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos: string[] = [];
  CursosService: CursosService;

  constructor() {
    this.CursosService = new CursosService();
    this.cursos = this.CursosService.getCursos();
  }
}
