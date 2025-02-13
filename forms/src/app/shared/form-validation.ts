import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

export class FormValidations {
  static requiredMinCheckbox(min = 1) {
    const validator = (formArray: AbstractControl) => {
      if (formArray instanceof FormArray) {
        const totalChecked = formArray.controls
          .map((v) => v.value)
          .reduce(
            (total: number, atual: number) => (atual ? total + atual : total),
            0
          );
        return totalChecked >= min ? null : { required: true };
      }
      throw new Error('formArray is not an instance of FormArray');
    };
    return validator;
  }

  static cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep !== '') {
      const validacep = /^[0-9]{5}-[0-9]{3}$/;
      return validacep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      if (
        !formControl.root ||
        !((<FormGroup>formControl.root) as any).controls
      ) {
        return null;
      }

      const field = ((<FormGroup>formControl.root) as any).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { equalsTo: otherField };
      }

      return null;
    };

    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config: { [key: string]: string } = {
      required: `${fieldName} é obrigatório.`,
      minlength: `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      maxlength: `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      cepInvalido: 'CEP inválido.',
      emailInvalido: 'Email inválido.',
      equalsTo: 'Campos não são iguais.',
    };

    return config[validatorName];
  }
}
