import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva2-ngstyle',
  standalone: false,
  
  templateUrl: './diretiva2-ngstyle.component.html',
  styleUrl: './diretiva2-ngstyle.component.css'
})
export class Diretiva2NgstyleComponent {
  
  ativo: boolean = false;
  tamanhoFonte: number = 10;

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
