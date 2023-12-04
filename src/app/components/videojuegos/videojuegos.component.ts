import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from 'src/app/entidades/videojuego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css'],
})
export class VideojuegosComponent {
  videojuegos: Videojuego[] = [];

  constructor(
    private router: Router,
    private _juegosService: VideojuegosService
  ) {
    this.videojuegos = _juegosService.obtenerListaVideojuegos();
  }
}
