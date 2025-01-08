import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  standalone: false,
  
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';

    //var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
