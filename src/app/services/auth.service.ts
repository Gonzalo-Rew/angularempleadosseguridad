import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';
import { Login } from '../models/login';

export interface AuthResponse {
  response: string;
}

@Injectable()
export class AuthService {
  url = environment.urlApiEmpleados;

  constructor(private _http: HttpClient) {}

  hasValidToken(): boolean {
    const token = sessionStorage.getItem('authToken');
    return !!token && token !== '[object Object]';
  }

  clearToken(): void {
    sessionStorage.removeItem('authToken');
  }

  async getToken(login: Login): Promise<AuthResponse> {
    const url = `${this.url}auth/login`;
    const body = { username: login.userName, password: login.password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return firstValueFrom(this._http.post<AuthResponse>(url, JSON.stringify(body), { headers }));
  }
}
