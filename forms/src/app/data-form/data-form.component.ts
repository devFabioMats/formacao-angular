import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
 AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { FormValidations } from '../shared/form-validation';
import { VerificaEmailService } from './services/verifica-email.service';

@Component({
  selector: 'app-data-form',
  standalone: false,

  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css',
})
export class DataFormComponent {
  formulario!: FormGroup;
  estados: EstadoBr[] = [];
  cargos: any[] = [];
  tecnologias: any[] = [];
  newsletterOp: any[] = [''];

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropDownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) {}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.verificaEmailService.verificarEmail().subscribe();	

    this.estados = [];

    this.cargos = this.dropDownService.getCargos();

    this.tecnologias = this.dropDownService.getTecnologias();

    this.newsletterOp = this.dropDownService.getNewsletter();

    this.dropDownService.getEstadosBr().subscribe((dados: EstadoBr[]) => {
      console.log(dados);
      this.estados.push(...dados);
    });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['sim'],
      termos: [true, Validators.pattern('true')],
      frameworks: this.buildFrameworks(),
    });
  }

  frameworksArrayControls() {
    return (this.formulario.get('frameworks') as FormArray).controls;
  }

  buildFrameworks() {
    const values = this.frameworks.map((v) => new FormControl(false));
    return this.formBuilder.array(
      values,
      FormValidations.requiredMinCheckbox(1)
    );
    // return [
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    // ]
  }

  // requiredMinCheckbox(min = 1) {
  //   const validator = (formArray: FormArray) => {
  //     // programacao estruturada
  //     // const values = formArray.controls;
  //     // let totalChecked = 0;

  //     // for (let i = 0; i < values.length; i++) {
  //     //   if (values[i].value) {
  //     //     totalChecked += 1;
  //     //   }
  //     // }

  //     // programacao funcional
  //     const totalChecked = formArray.controls
  //       .map((v) => v.value)
  //       .reduce((total, current) => (current ? total + current : total), 0);
  //     return totalChecked >= min ? null : { required: true };
  //   };

  //   requiredMinCheckbox(min = 1){
  //   const validator = (formArray: AbstractControl) => {
  //     if(formArray instanceof FormArray){
  //       const totalChecked = formArray.controls.map(v => v.value)
  //         .reduce((total: number, atual: number) => (atual ? total + atual : total), 0);
  //       return totalChecked >= min ? null : {required: true};
  //     }
  //     throw new Error('formArray is not an instance of FormArray');
  //   };
  //   return validator;
  // }

  onSubmit() {
    console.log(this.formulario.value);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: any, i: any) => (v ? this.frameworks[i] : null))
        .filter((v: any) => v !== null),
    });

    console.log(valueSubmit);

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
        this.verificaValiacoesForm(this.formulario);
      }
    }
  }

  verificaValiacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle!.markAsTouched();
      if (controle instanceof FormGroup) {
        // <-- Verifica se é um FormGroup
        this.verificaValiacoesForm(controle); // <-- Chama a função recursivamente
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo)?.valid &&
      !!this.formulario.get(campo)?.touched
    );
  }

  verificaRequired(campo: string) {
    return (
      !this.formulario.get(campo)?.hasError('required') &&
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

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep')!.value;

    if (cep != null && cep !== '') {
      this.cepService
        .consultaCep(cep)
        ?.subscribe((dados) => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados: any) {
    // this.formulario.setValue({});

    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });

    this.formulario.get('nome')!.setValue('Loiane');

    // console.log(form);
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo')!.setValue(cargo);
  }

  compararCargos(obj1: any, obj2: any) {
    // primeiro, verifica se os objetos existem, caso existem, executa
    // a comparação dos atributos nome e nivel, caso contrário, compara
    // os objetos diretamente
    return obj1 && obj2
      ? obj1.nome === obj2.nome && obj1.nivel === obj2.nivel
      : obj1 === obj2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologias')!.setValue(['java', 'javascript', 'php']);
  }
}
