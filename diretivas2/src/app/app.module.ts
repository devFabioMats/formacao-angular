import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Diretiva2NgifComponent } from './diretiva2-ngif/diretiva2-ngif.component';
import { Diretiva2NgswitchComponent } from './diretiva2-ngswitch/diretiva2-ngswitch.component';
import { Diretiva2NgforComponent } from './diretiva2-ngfor/diretiva2-ngfor.component';
import { Diretiva2NgclassComponent } from './diretiva2-ngclass/diretiva2-ngclass.component';
import { Diretiva2NgstyleComponent } from './diretiva2-ngstyle/diretiva2-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { Diretivas2CustomizadasComponent } from './diretivas2-customizadas/diretivas2-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    Diretiva2NgifComponent,
    Diretiva2NgswitchComponent,
    Diretiva2NgforComponent,
    Diretiva2NgclassComponent,
    Diretiva2NgstyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
    FundoAmareloDirective,
    Diretivas2CustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
