import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: false,
  
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos: any[] = [];
  pagina: number = 1;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }
}
