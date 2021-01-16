import {Component, OnInit} from '@angular/core';
import {Cancha} from 'src/app/shared/models/cancha';
import {CanchaService} from 'src/app/shared/services/cancha.service';

@Component({
  selector: 'app-listar-canchas',
  templateUrl: './listar-canchas.component.html',
  styles: []
})
export class ListarCanchasComponent implements OnInit {

  canchas: Cancha[];

  constructor(private canchaService: CanchaService) {
  }

  ngOnInit(): void {
    this.canchaService.listarCanchas().subscribe(
      (data: Cancha[]) => this.canchas = data,
      (error) => console.log(error)
    );
  }

  mostrarTabla(): boolean {
    return this.canchas !== undefined && this.canchas.length === 0;
  }

}
