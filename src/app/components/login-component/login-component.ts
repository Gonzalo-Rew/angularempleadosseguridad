import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mensajeError: string = '';
  constructor(
    private _authService: AuthService,
    private router: Router,
  ) {
    this._authService.clearToken();
  }

  async login(): Promise<void> {
    try {
      const token = await this._authService.getToken(this.username, this.password);
      if (typeof token?.response === 'string' && token.response.trim()) {
        sessionStorage.setItem('authToken', token.response);
        this.router.navigate(['/perfil']);
      } else {
        this.mensajeError = 'La respuesta de autenticación no contiene un token válido.';
      }
    }
    catch (error) {
      console.error('Login failed:', error);
      this.mensajeError = 'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
    }
  }
}
