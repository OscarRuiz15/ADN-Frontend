import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Cliente} from '@shared/models/cliente';
import {ClienteService} from '@shared/services/cliente.service';
import {SwalService} from '@shared/services/swal.service';
import {Icon} from '@shared/enum/icon.enum';
import {Router} from '@angular/router';
import {ErroresService} from '@shared/services/errores.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styles: []
})
export class AgregarClienteComponent implements OnInit {

  formularioCliente: FormGroup;
  cliente: Cliente;

  constructor(private clienteService: ClienteService,
              private swalService: SwalService,
              private router: Router,
              public erroresService: ErroresService) {
    this.cliente = this.clienteService.cliente;
  }

  ngOnInit(): void {
    this.formularioCliente = new FormGroup({
      nombre: new FormControl(this.cliente !== null ? this.cliente.nombre : null, Validators.required),
      correo: new FormControl(this.cliente !== null ? this.cliente.correo : null),
      telefono: new FormControl(this.cliente !== null ? this.cliente.telefono : null, Validators.required),
      cedula: new FormControl(this.cliente !== null ? this.cliente.cedula : null, Validators.required),
    });
  }

  agregarCliente(): void {

    if (this.formularioCliente.valid) {

      const cliente = new Cliente(
        this.formularioCliente.value.nombre,
        this.formularioCliente.value.correo,
        this.formularioCliente.value.telefono,
        this.formularioCliente.value.cedula);

      if (this.cliente) {
        cliente.id = this.clienteService.cliente.id;
        this.clienteService.actualizarCliente(cliente).subscribe(
          () => {
            this.swalService.alert('Éxito', 'El cliente ha sido actualizado');
            this.regresar();
          },
          (error) => {
            this.swalService.alert('Error', error.error.mensaje, Icon.WARNING);
          }
        );
      } else {
        this.clienteService.almacenarCliente(cliente).subscribe(
          () => {
            this.swalService.alert('Éxito', 'El cliente ha sido registrado');
            this.regresar();
          },
          (error) => {
            this.swalService.alert('Error', error.error.mensaje, Icon.WARNING);
          }
        );
      }
    }
  }

  regresar(): void {
    this.clienteService.cliente = null;
    this.router.navigate(['/clientes/listar']);
  }
}
