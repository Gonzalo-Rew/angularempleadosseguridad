import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { MiPerfilComponent } from './components/mi-perfil-component/mi-perfil-component';
import { LoginComponent } from './components/login-component/login-component';
import { AuthGuard } from './guards/auth-guard';
import { EjemploSignalComponent } from './components/ejemplo-signal-component/ejemplo-signal-component';

let routes: Routes = [
  { redirectTo: 'login', pathMatch: 'full', path: '' },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: MiPerfilComponent, canActivate: [AuthGuard] },
  { path: 'subordinados', component: SubordinadosComponent, canActivate: [AuthGuard] },
  { path: 'signal', component: EjemploSignalComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
