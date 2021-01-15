import {Component, OnInit} from '@angular/core';
import {Cliente} from 'src/app/shared/models/cliente';
import {ClienteService} from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styles: []
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(
      (data: Cliente[]) => this.clientes = data,
      (error) => console.log(error)
    );
  }

  mostrarTabla(): boolean {
    return this.clientes.length === 0;
  }

}
