import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgregarReservaComponent} from './agregar-reserva/agregar-reserva.component';
import {ListarReservaComponent} from './listar-reserva/listar-reserva.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DlDateTimeDateModule, DlDateTimeInputModule, DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import { ReservaRoutingModule } from './reserva-routing.module';

@NgModule({
  declarations: [
    AgregarReservaComponent,
    ListarReservaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DlDateTimeDateModule,
    DlDateTimeInputModule,
    DlDateTimePickerModule,
    FormsModule,
    ReservaRoutingModule
  ],
  exports: [
    AgregarReservaComponent,
    ListarReservaComponent
  ]
})

export class ReservaModule {
}
