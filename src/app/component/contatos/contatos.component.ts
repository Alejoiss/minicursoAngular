import { GeralService } from './../../servico/geral.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  contatos: any;
  ganhador: number;

  constructor(
    private geralService: GeralService
  ) { }

  ngOnInit() {
    this.geralService.getContatos()
    .subscribe(
      contatos => this.contatos = contatos
    );
  }

  geraGanhador() {
    this.ganhador = Math.floor(Math.random() * 25);
  }
}
