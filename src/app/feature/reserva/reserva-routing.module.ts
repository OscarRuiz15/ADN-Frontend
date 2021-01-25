import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarReservaComponent } from './listar-reserva/listar-reserva.component';
import { AgregarReservaComponent } from './agregar-reserva/agregar-reserva.component';

const appRoutes: Routes = [
  {
    path: 'reservas',
    children: [
      { path: 'listar', component: ListarReservaComponent },
      { path: 'agregar', component: AgregarReservaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class ReservaRoutingModule {}
