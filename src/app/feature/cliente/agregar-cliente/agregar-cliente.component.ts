import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Cliente} from '../../../shared/models/cliente';
import {ClienteService} from '../../../shared/services/cliente.service';
import {SwalService} from '../../../shared/services/swal.service';
import {Icon} from '../../../shared/enum/icon.enum';
import {Router} from '@angular/router';
import {ErroresService} from '../../../shared/services/errores.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styles: []
})
export class AgregarClienteComponent implements OnInit {

  formularioCliente: FormGroup;

  constructor(private clienteService: ClienteService,
              private swalService: SwalService,
              private router: Router,
              public erroresService: ErroresService) {
  }

  ngOnInit(): void {
    this.formularioCliente = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null),
      telefono: new FormControl(null, Validators.required),
      cedula: new FormControl(null, Validators.required),
    });
  }

  agregarCliente(): void {

    if (this.formularioCliente.valid) {

      const cliente = new Cliente(
        this.formularioCliente.value.nombre,
        this.formularioCliente.value.correo,
        this.formularioCliente.value.telefono,
        this.formularioCliente.value.cedula);

      this.clienteService.almacenarcliente(cliente).subscribe(
        () => {
          this.swalService.alert('Éxito', 'El cliente ha sido registrado');
          this.regresar();
        },
        (error) => {
          this.swalService.alert('Error', error.error.mensaje, Icon.WARNING);
        }
      );
    } else {
      return;
    }
  }

  regresar(): void {
    this.router.navigate(['/clientes']);
  }
}
