import { Component, signal, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';
import { SignalService } from '../../services/service.signal';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  protected readonly isAuthenticated = signal(false);
  public _serviceSignal: SignalService = inject(SignalService);
  public contador = this._serviceSignal.contador;
  public _serviceAuth: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);
  public usuario = this._serviceAuth.user;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.isAuthenticated.set(this.authService.hasValidToken());
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.isAuthenticated.set(this.authService.hasValidToken());
    });
  }

  logout(): void {
    this._serviceAuth.logOutEmpleado();
    this.router.navigate(['/login']);
    this.isAuthenticated.set(false);
  }
}
