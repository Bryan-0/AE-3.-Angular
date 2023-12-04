import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego } from 'src/app/entidades/videojuego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css'],
})
export class VideojuegoComponent implements OnInit {
  videojuego: Videojuego | undefined;

  constructor(
    private _juegosService: VideojuegosService,
    private route: ActivatedRoute
  ) {
    const idVideojuego = parseInt(route.snapshot.params['id']);
    this.videojuego = _juegosService.obtenerVideojuegoPorId(idVideojuego);
  }

  ngOnInit(): void {}
}
