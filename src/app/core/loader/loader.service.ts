import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  mostrar: boolean = false;

  constructor() {
  }

  public show(): void {
    this.mostrar = true;
  }

  public hide(): void {
    this.mostrar = false;
  }
}
