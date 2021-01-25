import {Component, OnInit} from '@angular/core';
import {Cliente} from 'src/app/shared/models/cliente';
import {ClienteService} from 'src/app/shared/services/cliente.service';
import {Router} from '@angular/router';
import {SwalService} from '@shared/services/swal.service';
import {Icon} from '@shared/enum/icon.enum';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styles: []
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService,
              private swalService: SwalService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(
      (data: Cliente[]) => this.clientes = data,
      (error) => this.swalService.alert('Error', error.error.mensaje, Icon.ERROR)
    );
  }

  mostrarTabla(): boolean {
    return this.clientes.length === 0;
  }

  actualizarCliente(cliente: Cliente): void {
    this.clienteService.cliente = cliente;
    this.router.navigate(['/clientes/agregar']);
  }

}
