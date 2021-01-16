export class Cancha {
  constructor(
    public codigo: string,
    public nombre: string,
    public direccion: string,
    public telefono: string,
    public tipoCancha: string,
    public precioReserva: number,
    public id: number = 0) {
  }
}
