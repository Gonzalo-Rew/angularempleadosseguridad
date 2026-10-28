import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { MiPerfilComponent } from './components/mi-perfil-component/mi-perfil-component';
import { LoginComponent } from './components/login-component/login-component';

let routes: Routes = [
  { redirectTo: 'login', pathMatch: 'full', path: '' },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: MiPerfilComponent },
  { path: 'subordinados', component: SubordinadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
