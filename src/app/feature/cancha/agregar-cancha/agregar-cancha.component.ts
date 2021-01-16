import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CanchaService} from '../../../shared/services/cancha.service';
import {SwalService} from '../../../shared/services/swal.service';
import {Router} from '@angular/router';
import {Cancha} from '../../../shared/models/cancha';
import {Icon} from '../../../shared/enum/icon.enum';

@Component({
  selector: 'app-agregar-cancha',
  templateUrl: './agregar-cancha.component.html',
  styles: []
})
export class AgregarCanchaComponent implements OnInit {

  formulariCancha: FormGroup;

  constructor(private canchaService: CanchaService,
              private swallService: SwalService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formulariCancha = new FormGroup({
      codigo: new FormControl(null, Validators.required),
      nombre: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      tipoCancha: new FormControl(null, Validators.required),
      precioReserva: new FormControl('', Validators.required),
    });
  }

  agregarCancha(): void {
    console.log(this.formulariCancha.value);
    if (this.formulariCancha.valid) {

      const cancha = new Cancha(
        this.formulariCancha.value.codigo,
        this.formulariCancha.value.nombre,
        this.formulariCancha.value.direccion,
        this.formulariCancha.value.telefono,
        this.formulariCancha.value.tipoCancha,
        this.formulariCancha.value.precioReserva,
      );

      this.canchaService.agregarCancha(cancha).subscribe(
        () => {
          this.swallService.alert('Éxito', 'La cancha ha sido registrada');
          this.router.navigate(['/canchas']);
        },
        (error) => {
          this.swallService.alert('Error', error.error.mensaje, Icon.WARNING);
        }
      );

    } else {
      return;
    }
  }

}
