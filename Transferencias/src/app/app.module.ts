import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import localePt from '@angular/common/locales/pt' //Import na linha e abaixo para o registerLocaleData para ficar com datas em português.
import { registerLocaleData } from '@angular/common'; //
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent //Nome da classe que é um componente. ngModule inserida em input HTML buscará dessa classe quando o nome do ngModule for o mesmo nome do atributo da classe.
  ],
  imports: [
    BrowserModule,
    FormsModule, //Importa modulo de formulário.
    HttpClientModule, //Requisições REST.
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}, //Datas ficarem em português.
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'} //
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
