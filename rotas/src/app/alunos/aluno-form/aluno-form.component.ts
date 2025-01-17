import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  standalone: false,

  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css',
})

export class AlunoFormComponent {
  aluno: any = {};
  incricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) {}

  ngOnInit() {
    this.incricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunoService.getAluno(id);

      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }
}
