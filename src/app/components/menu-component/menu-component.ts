import { Component, signal, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SignalService } from '../../services/service.signal';

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
    sessionStorage.removeItem('authToken');
    this.router.navigate(['/login']);
    this.isAuthenticated.set(false);
  }
}
