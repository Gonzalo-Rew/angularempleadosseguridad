import { Component, signal } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
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
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        const hasToken = this.authService.hasValidToken();
        this.isAuthenticated.set(hasToken);

        const path = event.url.split('?')[0];
        if (!hasToken && ['/perfil', '/subordinados'].includes(path)) {
          this.router.navigate(['/login'], { replaceUrl: true });
        }
      });
  }
}
