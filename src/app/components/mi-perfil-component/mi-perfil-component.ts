import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-mi-perfil-component',
  standalone: false,
  styleUrl: './mi-perfil-component.css',
  templateUrl: './mi-perfil-component.html',
})
export class MiPerfilComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _empleadosService: EmpleadosService,
  ) {}

  ngOnInit(): void {
    console.log('token', sessionStorage.getItem('authToken'));
    const token = sessionStorage.getItem('authToken');
    if (token) {
      this._empleadosService.getPerfilEmpleado(token).then((empleado) => {
        this.empleado = empleado;
        this._cdr.detectChanges();
      });
    }
  }
}
