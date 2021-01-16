import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClienteService} from '../../../shared/services/cliente.service';
import {CanchaService} from '../../../shared/services/cancha.service';
import {ReservaService} from '../reserva.service';
import {Cancha} from '../../../shared/models/cancha';
import {Cliente} from '../../../shared/models/cliente';
import {ErroresService} from '../../../shared/services/errores.service';
import {Router} from '@angular/router';
import {SwalService} from '../../../shared/services/swal.service';
import {Icon} from '../../../shared/enum/icon.enum';
import {DateButton} from 'angular-bootstrap-datetimepicker';
import * as _moment from 'moment';
import {unitOfTime} from 'moment';
import {Reserva} from '../../../shared/models/reserva';
import {formatDate} from '@angular/common';

const moment = _moment;
moment.locale('es');

@Component({
  selector: 'app-agregar-reserva',
  templateUrl: './agregar-reserva.component.html',
  styles: []
})
export class AgregarReservaComponent implements OnInit {

  fechaSeleccionada: Date = new Date();
  fechaInicioReserva: string;
  formularioReserva: FormGroup;
  canchas: Cancha[];
  clientes: Cliente[];
  cerrar = false;

  constructor(private clienteService: ClienteService,
              private canchaService: CanchaService,
              private reservaService: ReservaService,
              private swalService: SwalService,
              private router: Router,
              public erroresService: ErroresService) {
    this.cargarCanchas();
    this.cargarClientes();
  }

  ngOnInit(): void {
    this.formularioReserva = new FormGroup({
      fechaInicioReserva: new FormControl(null, Validators.required),
      cancha: new FormControl(null, Validators.required),
      cliente: new FormControl(null, Validators.required)
    });
  }

  agregarReserva(): void {
    if (this.formularioReserva.valid) {
      const reserva = new Reserva(
        formatDate(this.formularioReserva.value.fechaInicioReserva, 'yyyy-MM-dd H:m', 'en_ES'),
        this.formularioReserva.value.cancha,
        this.formularioReserva.value.cliente,
      );
      this.reservaService.almacenarReserva(reserva).subscribe(
        () => {
          this.swalService.alert('Éxito', 'La reserva ha sido realizada');
          this.regresar();
        },
        (error) => this.swalService.alert('Error', error.error.mensaje, Icon.WARNING)
      );
    }
  }

  cargarCanchas(): void {
    this.canchaService.listarCanchas().subscribe(
      (data: Cancha[]) => this.canchas = data,
      (error) => this.swalService.alert('Error', error.error.mensaje, Icon.ERROR)
    );
  }

  cargarClientes(): void {
    this.clienteService.listarClientes().subscribe(
      (data: Cliente[]) => this.clientes = data,
      (error) => this.swalService.alert('Error', error.error.mensaje, Icon.ERROR)
    );
  }

  precioReservaCanchaElegida(): number {
    if (this.formularioReserva.controls.cancha.value) {
      return this.formularioReserva.controls.cancha.value.precioReserva;
    }
    return 0;
  }

  regresar(): void {
    this.router.navigate(['/reservas']);
  }

  keepDropDownOpen(event: Event): void {
    event.stopPropagation();
  }

  dateToPicker(fecha: Date): any {
    return {
      year: fecha.getFullYear(),
      month: fecha.getMonth() + 1,
      day: fecha.getDate(),
      hour: fecha.getHours(),
      minute: fecha.getMinutes()
    };
  }

  dateSelected(event): void {
    const date = new Date(event._value);
    const time = this.dateToPicker(date);
    this.fechaInicioReserva = `${time.year}-${time.month}-${time.day} ${time.hour}:${time.minute}`;
    if (event.value) {
      this.cerrar = true;
    }
  }

  datePickerFilter = (dateButton: DateButton, viewName: string) => {
    return dateButton.value >= moment().startOf(viewName as unitOfTime.StartOf).valueOf();
  };

  abrirDataPicker(): void {
    this.cerrar = false;
  }
}
