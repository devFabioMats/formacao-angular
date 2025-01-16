import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  standalone: false,

  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];
  cursosService: CursosService;

  constructor(_cursosService: CursosService) {
    //this.CursosService = new CursosService();
    this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }
}
