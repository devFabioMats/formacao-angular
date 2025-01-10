import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  standalone: false,
  
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {

  @Input()
  valor: number = 0;

  @Output()
  mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
