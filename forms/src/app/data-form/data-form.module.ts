import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormDebugComponent } from '../form-debug/form-debug.component';
import { DataFormComponent } from './data-form.component';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';

@NgModule({
  declarations: [
    DataFormComponent,
    FormDebugComponent,
    CampoControlErroComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class DataFormModule {}
