import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
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
    public route: ActivatedRoute,
    public alunoService: AlunosService,
    public router: Router
  ) {};

  ngOnInit () {
    this.incricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunoService.getAluno(id);
      }
    );
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }
  

}
