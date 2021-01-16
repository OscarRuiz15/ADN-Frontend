import {Component, OnInit} from '@angular/core';
import {Reserva} from 'src/app/shared/models/reserva';
import {ReservaService} from '../reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styles: []
})
export class ListarReservaComponent implements OnInit {

  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService) {
  }

  ngOnInit(): void {
    this.reservaService.listarReservas().subscribe(
      (data: Reserva[]) => this.reservas = data,
      (error) => console.log(error)
    );
  }

  mostrarTabla(): boolean {
    return this.reservas.length === 0;
  }
}
