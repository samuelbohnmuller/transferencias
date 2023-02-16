import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({ //Pode invocar a instancia dessa classe pela instancia de construtor de outra classe(injeção de dependencias).
  providedIn: 'root' //Pode ser utilizado em qualquer classe, estará sempre vivo.
})
export class TransferenciaService {

private listaDeTransferencia: any[] //Atributo que recebe todas as transferencias.
private url = 'http://localhost:3000/transferencias' //Endereço da API.

constructor(private httpClient: HttpClient) { //HttpClient faz requisições para API REST.
  this.listaDeTransferencia = [] //Inicializa o array.
}

get getTransferencias(){
  return this.listaDeTransferencia
}

transferenciasDaApi(): Observable<Transferencia[]>{ //Observable observa e pode retornar a resposta no futuro e buscará os dados na linha abaixo.
  return this.httpClient.get<Transferencia[]>(this.url) //Requisição GET para endereço que retorna um array de Transferencia(interface com atributos mapeados).
}

adicionar(transferencia: Transferencia): Observable<Transferencia> { //Quando o valor passado na chamada do método adicionar, é "convertido" ou "induzido" para tipo Transferencia, pois quando capturamos os valores no formulário, os dados vem como @Output.
  this.hidratar(transferencia)
  return this.httpClient.post<Transferencia>(this.url, transferencia) //Adiciono no endereço da API os valores preenchidos no formulário. Retorna um Observable do tipo Transferencia.

  //this.listaDeTransferencia.push(transferencia)  //Atributo array da classe recebe o conteúdo do evento(conteúdo preenchido nos inputs). $event cntém os valores preenchidos nos inputs que estão em 2 propriedades que estão sendo passadas para atributo transferencias, então posso acesa-las com: transferencias.valor .
}

private hidratar(transferencia: any){
  transferencia.data = new Date() //Pega o evento e insere data.
}

}
