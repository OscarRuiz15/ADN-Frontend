import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';

const appRoutes: Routes = [
  {
    path: 'clientes',
    children: [
      { path: 'listar', component: ListarClientesComponent },
      { path: 'agregar', component: AgregarClienteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
