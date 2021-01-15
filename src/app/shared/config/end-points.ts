import {environment} from 'src/environments/environment';
import {HttpHeaders} from '@angular/common/http';

const {urlPrincipal} = environment;
export const apiCancha = `${urlPrincipal}/canchas`;
export const apiCliente = `${urlPrincipal}/clientes`;
export const apiReserva = `${urlPrincipal}/reservas`;

export const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
