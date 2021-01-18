import {Component, OnInit} from '@angular/core';
import {Cancha} from 'src/app/shared/models/cancha';
import {CanchaService} from 'src/app/shared/services/cancha.service';
import {SwalService} from '../../../shared/services/swal.service';
import {Icon} from '../../../shared/enum/icon.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar-canchas',
  templateUrl: './listar-canchas.component.html',
  styles: []
})
export class ListarCanchasComponent implements OnInit {

  canchas: Cancha[] = [];

  constructor(private canchaService: CanchaService,
              private swallService: SwalService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.canchaService.listarCanchas().subscribe(
      (data: Cancha[]) => this.canchas = data,
      (error) => this.swallService.alert('Error', error.error.mensaje, Icon.ERROR)
    );
  }

  mostrarTabla(): boolean {
    return this.canchas.length === 0;
  }

  actualizarCancha(cancha: Cancha): void {
    this.canchaService.cancha = cancha;
    this.router.navigate(['/canchas/agregar']);
  }

}
