import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormDebugComponent } from '../shared/form-debug/form-debug.component';
import { DataFormComponent } from './data-form.component';
import { CampoControlErroComponent } from '../shared/campo-control-erro/campo-control-erro.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DataFormComponent,
    FormDebugComponent,
    CampoControlErroComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule],
  exports: [DataFormComponent],
})
export class DataFormModule {}
