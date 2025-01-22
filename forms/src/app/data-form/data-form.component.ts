import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  standalone: false,

  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css',
})
export class DataFormComponent {
  formulario!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario.valid) {
      this.http
        .post<any>(
          'https://httpbin.org/post',
          JSON.stringify(this.formulario.value)
        )
        .pipe(map((res: any) => res))
        .subscribe(
          (dados: any) => {
            console.log(dados);
            // reseta o form
            // this.formulario.reset();
            this.resetar();
          },
          (error: any) => alert('erro')
        );
    }
  }

  resetar() {
    this.formulario.reset();
  }
}
