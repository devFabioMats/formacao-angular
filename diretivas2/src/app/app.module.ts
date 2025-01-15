import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Diretiva2NgifComponent } from './diretiva2-ngif/diretiva2-ngif.component';
import { Diretiva2NgswitchComponent } from './diretiva2-ngswitch/diretiva2-ngswitch.component';
import { Diretiva2NgforComponent } from './diretiva2-ngfor/diretiva2-ngfor.component';
import { Diretiva2NgclassComponent } from './diretiva2-ngclass/diretiva2-ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    Diretiva2NgifComponent,
    Diretiva2NgswitchComponent,
    Diretiva2NgforComponent,
    Diretiva2NgclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
