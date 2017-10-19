import { ContatosComponent } from './component/contatos/contatos.component';
import { NgifNgforComponent } from './component/ngif-ngfor/ngif-ngfor.component';
import { DataBindComponent } from './component/data-bind/data-bind.component';
import { MeuPrimeiroComponenteComponent } from './component/meu-primeiro-componente/meu-primeiro-componente.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'home', component: MeuPrimeiroComponenteComponent,
        children: [
            {path: 'data-bind', component: DataBindComponent}
        ]
    },
    {path: 'data-bind', component: DataBindComponent},
    {path: 'if-for', component: NgifNgforComponent},
    {path: 'contato', component: ContatosComponent},

    {path: '**', component: MeuPrimeiroComponenteComponent}
];
