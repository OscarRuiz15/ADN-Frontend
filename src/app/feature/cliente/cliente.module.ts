import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgregarClienteComponent} from './agregar-cliente/agregar-cliente.component';
import {ListarClientesComponent} from './listar-clientes/listar-clientes.component';

@NgModule({
  declarations: [
    AgregarClienteComponent,
    ListarClientesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgregarClienteComponent,
    ListarClientesComponent
  ]
})

export class ClienteModule {
}
