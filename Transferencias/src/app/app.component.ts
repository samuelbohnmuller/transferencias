import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //Classe do componente principal.
  title = 'banquinhos';

  constructor(private service: TransferenciaService){} //Tenho acesso aos dados de TransferenciaService através do atributo passado no construtor.

  /*
  transfere($event){
    this.service.adicionar($event)
  }*/
}
