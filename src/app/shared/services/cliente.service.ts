import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../models/cliente';
import {apiCliente, httpOptions} from '../config/end-points';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(apiCliente, httpOptions).pipe();
  }

  consultarClientePorCedula(cedula: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${apiCliente}/${cedula}`, httpOptions).pipe();
  }

  almacenarcliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(apiCliente, cliente, httpOptions).pipe();
  }
}
