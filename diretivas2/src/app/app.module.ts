import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Diretiva2NgifComponent } from './diretiva2-ngif/diretiva2-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    Diretiva2NgifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
