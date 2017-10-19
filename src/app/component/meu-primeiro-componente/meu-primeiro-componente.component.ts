import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrls: ['./meu-primeiro-componente.component.css']
})
export class MeuPrimeiroComponenteComponent implements OnInit {

  data: Date;

  constructor() { }

  ngOnInit() {
    this.data = new Date();
  }

}
