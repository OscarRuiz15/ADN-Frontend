import {Component, OnInit} from '@angular/core';
import {Reserva} from 'src/app/shared/models/reserva';
import {ReservaService} from '../reserva.service';
import {Icon} from '../../../shared/enum/icon.enum';
import {SwalService} from '../../../shared/services/swal.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styles: []
})
export class ListarReservaComponent implements OnInit {

  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService,
              private swallService: SwalService) {
  }

  ngOnInit(): void {
    this.listarReservas();
  }

  listarReservas(): void {
    this.reservaService.listarReservas().subscribe(
      (data: Reserva[]) => this.reservas = data,
      (error) => this.swallService.alert('Error', error.error.mensaje, Icon.ERROR)
    );
  }

  mostrarTabla(): boolean {
    return this.reservas.length === 0;
  }

  confirmar(id: number): void {
    this.swallService.confirm('¿Esta seguro?', 'Esta a punto de eliminar la reserva',
      'warning',
      'Si',
      'No',
      {
        clickConfirm: () => this.eliminarReserva(id)
      }
    );
  }

  eliminarReserva(id: number): void {
    this.reservaService.eliminarReserva(id).subscribe(
      () => {
        this.swallService.alert('Éxito', 'La reserva ha sido eliminado');
        this.listarReservas();
      },
      (error) => this.swallService.alert('Error', error.error.mensaje, Icon.ERROR)
    );
  }
}
