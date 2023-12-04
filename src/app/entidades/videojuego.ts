export class Videojuego {
  private _id: number = 0;
  private _titulo: string = '';
  private _compania: string = '';
  private _image: string = '';
  private _valoracionMedia: number = 0;

  constructor(
    id: number,
    titulo: string,
    compania: string,
    image: string,
    valoracionMedia: number
  ) {
    this.id = id;
    this.titulo = titulo;
    this.compania = compania;
    this.image = image;
    this.valoracionMedia = valoracionMedia;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get titulo(): string {
    return this._titulo;
  }
  public set titulo(value: string) {
    this._titulo = value;
  }

  public get compania(): string {
    return this._compania;
  }
  public set compania(value: string) {
    this._compania = value;
  }

  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }

  public get valoracionMedia(): number {
    return this._valoracionMedia;
  }
  public set valoracionMedia(value: number) {
    this._valoracionMedia = value;
  }
}
