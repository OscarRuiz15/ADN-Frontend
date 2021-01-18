import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cancha} from '../models/cancha';
import {apiCancha, httpOptions} from '../config/end-points';


@Injectable({
  providedIn: 'root'
})
export class CanchaService {

  cancha: Cancha = null;

  constructor(private http: HttpClient) {
  }

  listarCanchas(): Observable<Cancha[]> {
    return this.http.get<Cancha[]>(apiCancha, httpOptions).pipe();
  }

  consultarCanchaPorCodigo(codigo: string): Observable<Cancha> {
    return this.http.get<Cancha>(`${apiCancha}/${codigo}`, httpOptions).pipe();
  }

  agregarCancha(cancha: Cancha): Observable<Cancha> {
    return this.http.post<Cancha>(apiCancha, cancha, httpOptions).pipe();
  }

  actualizarCancha(cancha: Cancha): Observable<Cancha> {
    return this.http.put<Cancha>(apiCancha, cancha, httpOptions).pipe();
  }
}
