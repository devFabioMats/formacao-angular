import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url: any = 'https://www.linkedin.com/in/fabiomats/';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com.br/500/400/?40'

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    window.alert('Botão clicado!');
  }
}
