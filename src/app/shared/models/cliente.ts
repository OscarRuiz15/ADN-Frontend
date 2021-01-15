export class Cliente {
  constructor(
    public nombre: string,
    public correo: string,
    public telefono: string,
    public cedula: string,
    public id?: number) {
  }
}
