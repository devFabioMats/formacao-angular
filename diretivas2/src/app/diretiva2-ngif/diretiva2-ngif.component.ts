import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva2-ngif',
  standalone: false,

  templateUrl: './diretiva2-ngif.component.html',
  styleUrl: './diretiva2-ngif.component.css',
})
export class Diretiva2NgifComponent {
  cursos: string[] = ['Angular 2'];

  mostrarCursos: boolean = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
