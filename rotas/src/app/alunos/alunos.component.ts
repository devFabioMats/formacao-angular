import { Component } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  standalone: false,
  
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  public alunos: any[] = [];
  
  constructor(private alunosService: AlunosService) {}

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }
}
