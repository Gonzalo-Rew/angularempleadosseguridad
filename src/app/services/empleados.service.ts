import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable()
export class EmpleadosService {
  url = environment.urlApiEmpleados;
  constructor(private _http: HttpClient) {}

  async getPerfilEmpleado(token: string): Promise<Empleado> {
    const url = `${this.url}api/empleados/perfilempleado`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return firstValueFrom(this._http.get<Empleado>(url, { headers }));
  }

  async getSubordinados(token: string): Promise<Empleado[]> {
    const url = `${this.url}api/empleados/subordinados`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return firstValueFrom(this._http.get<Empleado[]>(url, { headers }));
  }
}
