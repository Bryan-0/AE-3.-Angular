import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() user: Usuario | null = null;

  constructor(private _authService: AuthService, private router: Router) {}

  public cerrarSesion() {
    this._authService.cerrarSesion();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
