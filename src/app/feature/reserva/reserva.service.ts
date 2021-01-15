import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reserva} from 'src/app/shared/models/reserva';
import {apiReserva, httpOptions} from 'src/app/shared/config/end-points';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) {
  }

  listarReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(apiReserva, httpOptions).pipe();
  }

  obtenerReservaPorId(id: number): Observable<Reserva> {
    return this.http.get<Reserva>(`${apiReserva}/${id}`, httpOptions).pipe();
  }

  almacenarReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(apiReserva, reserva, httpOptions).pipe();
  }
}
