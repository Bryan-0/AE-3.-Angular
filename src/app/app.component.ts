import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Subject } from 'rxjs';
import { Usuario } from './entidades/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'videojuegos';
  estaAutenticadoSrc: Subject<boolean>;
  estaAutenticado: boolean = false;
  userActualSrc: Subject<Usuario | null>;
  userActual: Usuario | null = null;

  constructor(private _authService: AuthService, private router: Router) {
    this.estaAutenticadoSrc = _authService.estaAutenticado();
    this.estaAutenticadoSrc.subscribe((value) => {
      this.estaAutenticado = value;
    });
    this.userActualSrc = _authService.getUserActual();
    this.userActualSrc.subscribe((value) => {
      this.userActual = value;
    });
  }
}
