import { Component, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly isAuthenticated = signal(false);

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.isAuthenticated.set(this.authService.hasValidToken());
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isAuthenticated.set(this.authService.hasValidToken());
      });
  }
}
