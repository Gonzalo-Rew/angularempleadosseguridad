import { Component, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  protected readonly isAuthenticated = signal(false);

  constructor(router: Router, authService: AuthService) {
    this.isAuthenticated.set(authService.hasValidToken());
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isAuthenticated.set(authService.hasValidToken());
      });
  }
}
