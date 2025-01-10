import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  standalone: false,
  
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css'

  inputs: [
    'nomeCurso'
  ]
})
export class InputPropertyComponent implements OnInit {
  
  //@Input('nome') 
  nomeCurso: string = '';

  constructor() {}

  ngOnInit() {}
}
