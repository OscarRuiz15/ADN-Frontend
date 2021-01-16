import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tipoCancha'
})
export class TipoCanchaPipe implements PipeTransform {

  transform(tipoCancha: string): string {
    switch (tipoCancha) {
      case 'FUTBOL_CINCO':
        return 'Fútbol Cinco';
      case 'FUTBOL_SEIS':
        return 'Fútbol Seis';
      case 'FUTBOL_SIETE':
        return 'Fútbol Siete';
      case 'FUTBOL_OCHO':
        return 'Fútbol Ocho';
      case 'FUTBOL_NUEVE':
        return 'Fútbol Nueve';
      case 'FUTBOL_DIEZ':
        return 'Fútbol Diez';
      case 'FUTBOL_ONCE':
        return 'Fútbol Once';
    }
    return null;
  }

}
