import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  standalone: false,
  
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

}
