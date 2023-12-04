import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarios: Usuario[] = [];
  private userActualSubject: Subject<Usuario | null> = new Subject();
  private userActual: Usuario | null = null;
  private autenticado: Subject<boolean> = new Subject();
  estaAutenticadoBool: boolean = false;

  constructor() {
    this.usuarios.push(new Usuario(1, 'brayan', 'brayan'));
    this.usuarios.push(new Usuario(2, 'admin', 'admin'));

    this.autenticado.subscribe((value) => {
      this.estaAutenticadoBool = value;
    });

    this.userActualSubject.subscribe((value) => {
      this.userActual = value;
    });
  }

  public estaAutenticado(): Subject<boolean> {
    return this.autenticado;
  }

  public getUserActual() {
    return this.userActualSubject;
  }

  public iniciarSesion(usuario: string, password: string): boolean {
    const usuarioEncontrado = this.usuarios.find(
      (user) => user.nombre === usuario && user.password === password
    );
    if (usuarioEncontrado !== undefined) {
      this.autenticado.next(true);
      this.userActualSubject.next(usuarioEncontrado);
      return true;
    }
    return false;
  }

  public cerrarSesion(): void {
    this.autenticado.next(false);
  }
}
