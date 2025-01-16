import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas2-customizadas',
  standalone: false,

  templateUrl: './diretivas2-customizadas.component.html',
  styleUrl: './diretivas2-customizadas.component.css',
})
export class Diretivas2CustomizadasComponent {
  mostrarCursos: boolean = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
