import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  standalone: false,
  
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.css'
})
export class OperadorElvisComponent {
  tarefa: any = {

    descricao: 'Descrição da tarefa',
    responsavel: {
      usuario: null
    }
    };

}
