import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';

const routes: Routes = [
  {
    path: '',
    component: VideojuegosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'videojuego/:id',
    component: VideojuegoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sobre-nosotros',
    component: NosotrosComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
