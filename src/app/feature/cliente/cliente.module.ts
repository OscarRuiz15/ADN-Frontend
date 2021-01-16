import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgregarClienteComponent} from './agregar-cliente/agregar-cliente.component';
import {ListarClientesComponent} from './listar-clientes/listar-clientes.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AgregarClienteComponent,
    ListarClientesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AgregarClienteComponent,
    ListarClientesComponent
  ]
})

export class ClienteModule {
}
