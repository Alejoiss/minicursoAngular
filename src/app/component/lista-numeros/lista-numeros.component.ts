import { GeralService } from './../../servico/geral.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css']
})
export class ListaNumerosComponent implements OnInit {
  @Input()
  listaNumeros: number[];

  @Output()
  saida: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private geralService: GeralService
  ) { }

  ngOnInit() {
  }

  enviarNumero(numero) {
    this.saida.emit(numero);
    this.geralService.numeroSource.next(numero);
  }

}
