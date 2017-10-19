import { HttpModule } from '@angular/http';
import { GeralService } from './servico/geral.service';
import { routes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './component/meu-primeiro-componente/meu-primeiro-componente.component';
import { DataBindComponent } from './component/data-bind/data-bind.component';
import { RouterModule } from '@angular/router';
import { NgifNgforComponent } from './component/ngif-ngfor/ngif-ngfor.component';
import { MenuComponent } from './component/menu/menu.component';
import { ParImparPipe } from './pipe/par-impar.pipe';
import { MarcarDirective } from './directiva/marcar.directive';
import { ListaNumerosComponent } from './component/lista-numeros/lista-numeros.component';
import { ContatosComponent } from './component/contatos/contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent,
    DataBindComponent,
    MenuComponent,
    NgifNgforComponent,
    ParImparPipe,
    MarcarDirective,
    ListaNumerosComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    GeralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
