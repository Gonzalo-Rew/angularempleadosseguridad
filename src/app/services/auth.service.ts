import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  url = environment.urlApiEmpleados;

  constructor(private _http: HttpClient) {}
  async getToken(username: string, password: string) {
    const url = `${this.url}auth/login`;
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return firstValueFrom(this._http.post<string>(url, JSON.stringify(body), { headers }));
  }
}
