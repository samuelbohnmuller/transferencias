import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { ExtratoComponent } from "./extrato/extrato.component";
import { NovaTransferenciaComponent } from "./nova-transferencia/nova-transferencia.component";

export const routes: Routes = [ //Configuração de rotas.
  {path: '', redirectTo: 'extrato', pathMatch: 'full'}, //Quando o caminho for vazio, será direcionado para extrato.
  {path: 'extrato', component: ExtratoComponent}, //Caminho corresponde ao componente.
  {path: 'nova-transferencia', component: NovaTransferenciaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Importação de módulo de rotas principal(root).
  exports: [RouterModule]
})

export class AppRoutingModule{

}
