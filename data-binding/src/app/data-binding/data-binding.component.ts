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

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Fabio',
    idade: 21
  }

  nomeDoCurso: string = 'Angular';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    window.alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  } 

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
