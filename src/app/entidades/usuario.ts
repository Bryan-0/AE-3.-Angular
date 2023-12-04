export class Usuario {
  private _id: number = 0;
  private _nombre: string = '';
  private _password: string = '';

  constructor(id: number, nombre: string, password: string) {
    this.id = id;
    this.nombre = nombre;
    this.password = password;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
}
