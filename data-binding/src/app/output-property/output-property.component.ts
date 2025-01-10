import { Component, Input } from '@angular/core';

@Component({
  selector: 'contador',
  standalone: false,
  
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {

  @Input()
  valor: number = 0;

  incrementa() {
    this.valor++;
  }

  decrementa() {
    this.valor--;
  }
}
