import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: false,
  
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.css'
})
export class AlunoDetalheComponent {
  aluno: any = {};
  incricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) {};

  ngOnInit () {
    this.incricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunoService.getAluno(id);
      }
    );
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }
  

}
