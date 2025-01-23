import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
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
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario) {
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
      } else {
        console.log('formulario invalido');
        Object.keys(this.formulario.controls).forEach((campo) => {
          console.log(campo);
          const controle = this.formulario.get(campo);
          controle!.markAsTouched();
        });
      }
    }
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: any) {
    return (
      !this.formulario.get(campo)?.valid &&
      !!this.formulario.get(campo)?.touched
    );
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail!.errors) {
      return campoEmail!.errors['email'] && campoEmail!.touched;
    }
    return false;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }

  consultaCep() {
    let cep = this.formulario.get('endereco.cep')!.value;

    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep != '') {
      // Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.resetaDadosForm();

        this.http
          .get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(map((dados: any) => dados))
          .subscribe((dados: any) => this.populaDadosForm(dados));
      }
    }
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }

  populaDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }
}
