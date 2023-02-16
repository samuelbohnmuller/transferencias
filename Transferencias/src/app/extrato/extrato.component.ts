import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] //Atributo que será declarado na invocação do componente que pegará as informações vindas do output().

  constructor(private service: TransferenciaService) { } //Injeção de dependencias.

  ngOnInit() { //Quando o componente for inicializado.
    this.service.transferenciasDaApi().subscribe((listaDeTransferencias: Transferencia[]) => { //Sobescrevo os dados da API que vier com uma lista de Transferencia.
      this.transferencias = listaDeTransferencias //transferencias da classe, recebe o que vier da API.
    })

    //this.transferencias = this.service.getTransferencias //Passo a lista de transferencias para array local transferencias da classe ExtratoComponent.
  }

}
