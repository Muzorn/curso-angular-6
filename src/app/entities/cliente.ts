export class Cliente {
  constructor(
    public nombre: string,
    public direccion: string
  ) {}

  toString(): string {
    return this.nombre + ' ' + this.direccion;
  }
}
