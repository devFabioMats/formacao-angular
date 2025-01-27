import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  standalone: false,
  
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.css'
})
export class ErrorMsgComponent {
  @Input() mostrarErro: boolean = false;
  @Input() msgErro: string = '';
}
