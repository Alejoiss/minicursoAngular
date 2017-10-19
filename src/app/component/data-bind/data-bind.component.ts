import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  nome: string;

  constructor() { }

  ngOnInit() {
  }

  mostrarNome() {
    window.alert(this.nome);
  }

}
