import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

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

  async getToken(username: string, password: string): Promise<AuthResponse> {
    const url = `${this.url}auth/login`;
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return firstValueFrom(this._http.post<AuthResponse>(url, JSON.stringify(body), { headers }));
  }
}
