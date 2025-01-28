import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validation';

@Component({
  selector: 'app-error-msg',
  standalone: false,

  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.css',
})
export class ErrorMsgComponent {
  // @Input() mostrarErro: boolean = false;
  // @Input() msgErro: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() label: string = '';

  constructor() {}

  ngOnInit() {}

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
