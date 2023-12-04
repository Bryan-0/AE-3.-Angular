import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  password = '';
  mensaje = '';
  error = false;

  constructor(private _authService: AuthService, private router: Router) {}

  public login() {
    this.error = false;

    const haIniciadoSesion = this._authService.iniciarSesion(
      this.usuario,
      this.password
    );
    if (!haIniciadoSesion) {
      this.mensaje = 'Credenciales Incorrectas!';
      this.error = true;
      return;
    }

    this.router.navigate(['/']);
  }

  ngOnInit(): void {}
}
