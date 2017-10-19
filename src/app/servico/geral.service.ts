import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GeralService {

  numeroSource: Subject<number> = new Subject<number>();
  numero$: Observable<number> = this.numeroSource.asObservable();

  constructor(
    private http: Http
  ) { }

  getContatos() {
    return this.http.get('/assets/json/contatos.json')
      .map(res => res.json())
      .catch(res => res.json().error);
  }
}
