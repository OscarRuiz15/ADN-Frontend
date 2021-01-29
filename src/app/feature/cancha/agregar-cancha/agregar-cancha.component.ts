import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CanchaService} from '@shared/services/cancha.service';
import {SwalService} from '@shared/services/swal.service';
import {Router} from '@angular/router';
import {Cancha} from '@shared/models/cancha';
import {Icon} from '@shared/enum/icon.enum';
import {ErroresService} from '@shared/services/errores.service';

@Component({
  selector: 'app-agregar-cancha',
  templateUrl: './agregar-cancha.component.html',
  styles: []
})
export class AgregarCanchaComponent implements OnInit {

  formulariCancha: FormGroup;
  cancha: Cancha;

  constructor(private canchaService: CanchaService,
              private swallService: SwalService,
              private router: Router,
              public erroresService: ErroresService) {
    this.cancha = this.canchaService.cancha;
  }

  ngOnInit(): void {
    this.formulariCancha = new FormGroup({
      codigo: new FormControl(this.cancha !== null ? this.cancha.codigo : null, Validators.required),
      nombre: new FormControl(this.cancha !== null ? this.cancha.nombre : null, Validators.required),
      direccion: new FormControl(this.cancha !== null ? this.cancha.direccion : null, Validators.required),
      telefono: new FormControl(this.cancha !== null ? this.cancha.telefono : null, Validators.required),
      tipoCancha: new FormControl(this.cancha !== null ? this.cancha.tipoCancha : null, Validators.required),
      precioReserva: new FormControl(this.cancha !== null ? this.cancha.precioReserva : null, Validators.required),
    });
  }

  agregarCancha(): void {
    if (this.formulariCancha.valid) {

      const cancha = new Cancha(
        this.formulariCancha.value.codigo,
        this.formulariCancha.value.nombre,
        this.formulariCancha.value.direccion,
        this.formulariCancha.value.telefono,
        this.formulariCancha.value.tipoCancha,
        this.formulariCancha.value.precioReserva,
      );

      if (this.cancha) {
        cancha.id = this.canchaService.cancha.id;
        this.canchaService.actualizarCancha(cancha).subscribe(
          () => {
            this.swallService.alert('Éxito', 'La cancha ha sido actualizada');
            this.regresar();
          },
          (error) => {
            this.swallService.alert('Error', error.error.mensaje, Icon.WARNING);
          }
        );
      } else {
        this.canchaService.agregarCancha(cancha).subscribe(
          () => {
            this.swallService.alert('Éxito', 'La cancha ha sido registrada');
            this.regresar();
          },
          (error) => {
            this.swallService.alert('Error', error.error.mensaje, Icon.WARNING);
          }
        );
      }
    }
  }

  regresar(): void {
    this.canchaService.cancha = null;
    this.router.navigate(['/canchas/listar']);
  }

}
