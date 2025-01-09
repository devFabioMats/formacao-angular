import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  standalone: false,
  
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css'
})
export class InputPropertyComponent implements OnInit {
  
  @Input('nome') 
  nome: string = '';

  constructor() {}

  ngOnInit() {}
}
