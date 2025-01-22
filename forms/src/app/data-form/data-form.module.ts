import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormDebugComponent } from '../form-debug/form-debug.component';
import { DataFormComponent } from './data-form.component';



@NgModule({
  declarations: [DataFormComponent, FormDebugComponent ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class DataFormModule {}
