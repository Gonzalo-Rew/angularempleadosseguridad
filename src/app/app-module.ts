import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu-component/menu-component';
import { MiPerfilComponent } from './components/mi-perfil-component/mi-perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { LoginComponent } from './components/login-component/login-component';
import { AuthService } from './services/auth.service';
import { EmpleadosService } from './services/empleados.service';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  declarations: [App, MenuComponent, MiPerfilComponent, SubordinadosComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), AuthService, EmpleadosService, AuthGuard],
  bootstrap: [App],
})
export class AppModule {}
