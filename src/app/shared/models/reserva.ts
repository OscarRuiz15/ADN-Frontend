import {Cancha} from './cancha';
import {Cliente} from './cliente';

export class Reserva {
  constructor(
    public fechaInicioReserva: Date,
    public cancha: Cancha,
    public cliente: Cliente,
    public fechaFinReserva: Date,
    public valorPago: number,
    public id?: number) {
  }
}