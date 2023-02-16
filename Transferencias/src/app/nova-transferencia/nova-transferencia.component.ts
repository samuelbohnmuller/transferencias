import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { Transferencia } from '../models/transferencia.model'
import { TransferenciaService } from '../services/transferencia.service'

@Component({ //Decorator.
  selector: 'app-nova-transferencia', //Nome do seletor(que será importado no arquivo principal de html). Prefixo app é necessário.
  templateUrl: './nova-transferencia.component.html', //Arquivo html da página.
  styleUrls: ['./nova-transferencia.component.scss'], //Array de arquivos css.
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>()//Extrai os dados para quem invocou com evento de emitir, propagar o dado.

  valor: number
  destino: number

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    const valoresEmitidos: Transferencia = {valor: this.valor, destino: this.destino} //Valores de nomes preenchidos nos inputs passarão para os atributos da interface Transferencia. this é que mostrará o valor preenchido no campo de texto do formulário.
    this.service.adicionar(valoresEmitidos).subscribe((observableDeTransferencia) => {
      this.limparCampos()
      this.router.navigateByUrl('extrato') //Navega até o endereço depois de efetuar a transferencia.
    }, (error) =>  console.error(error)) //Se houve erro na transação.

    //this.aoTransferir.emit({valor: this.valor, destino: this.destino})
  }

  limparCampos(){
    this.valor = 0
    this.destino = 0
  }

}


