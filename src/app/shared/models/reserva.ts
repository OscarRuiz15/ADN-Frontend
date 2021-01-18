import {Cancha} from './cancha';
import {Cliente} from './cliente';

export class Reserva {
  constructor(
    public fechaInicioReserva: string,
    public cancha: Cancha,
    public cliente: Cliente,
    public id: number = 0,
    public fechaFinReserva?: string,
    public valorPago?: number) {
  }
}
