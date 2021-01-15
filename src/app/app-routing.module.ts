import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './core/inicio/inicio.component';
import {AgregarCanchaComponent} from './feature/cancha/agregar-cancha/agregar-cancha.component';
import {ListarCanchasComponent} from './feature/cancha/listar-canchas/listar-canchas.component';
import {AgregarClienteComponent} from './feature/cliente/agregar-cliente/agregar-cliente.component';
import {ListarClientesComponent} from './feature/cliente/listar-clientes/listar-clientes.component';
import {AgregarReservaComponent} from './feature/reserva/agregar-reserva/agregar-reserva.component';
import {ListarReservaComponent} from './feature/reserva/listar-reserva/listar-reserva.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent, data: {titulo: 'Inicio'}},
  {path: 'clientes/agregar', component: AgregarClienteComponent, data: {titulo: 'Registrar cliente'}},
  {path: 'clientes', component: ListarClientesComponent, data: {titulo: 'Clientes'}},
  {path: 'canchas/agregar', component: AgregarCanchaComponent, data: {titulo: 'Registrar cancha'}},
  {path: 'canchas', component: ListarCanchasComponent, data: {titulo: 'Canchas'}},
  {path: 'reservas/agregar', component: AgregarReservaComponent, data: {titulo: 'Registrar reserva'}},
  {path: 'reservas', component: ListarReservaComponent, data: {titulo: 'Reservas'}},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
