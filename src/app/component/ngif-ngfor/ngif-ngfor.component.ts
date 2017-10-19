import { GeralService } from './../../servico/geral.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngif-ngfor',
  templateUrl: './ngif-ngfor.component.html',
  styleUrls: ['./ngif-ngfor.component.css']
})
export class NgifNgforComponent implements OnInit {

  numero: number;
  listaNumeros: number[] = [];
  ultimoNumeroClicado: number;
  ultimoNumeroClicadoServico: number;

  constructor(
    private geralService: GeralService
  ) { }

  ngOnInit() {
    this.geraNumeroAleatorio();

    this.geralService.numero$
      .subscribe(
        numero => this.ultimoNumeroClicadoServico = numero
      );
  }

  geraNumeroAleatorio() {
    this.numero = Math.floor(Math.random() * 1000) + 1;
    this.listaNumeros.push(this.numero);
  }

  mostrarSaida(numero) {
    this.ultimoNumeroClicado = numero;
  }
}
