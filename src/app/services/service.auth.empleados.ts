import { Injectable, signal } from '@angular/core';
import { Empleado } from '../models/empleado';
import { EmpleadosService } from './empleados.service';

@Injectable({ providedIn: 'root' })
export class ServiceAuthEmpleados {
    public user = signal<Empleado | null>(null);

    constructor(private _empleadosService: EmpleadosService) {}

    async logInEmpleado(token: string): Promise<void> {
        sessionStorage.setItem('authToken', token);
        const empleado = await this._empleadosService.getPerfilEmpleado(token);
        this.user.set(empleado);
    }

    logOutEmpleado(): void {
        sessionStorage.removeItem('authToken');
        this.user.set(null);
    }

}