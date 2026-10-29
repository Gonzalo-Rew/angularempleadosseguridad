import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { SignalService } from '../../services/service.signal';

@Component({
  selector: 'app-ejemplo-signal-component',
  standalone: false,
  styleUrl: './ejemplo-signal-component.css',
  templateUrl: './ejemplo-signal-component.html',
})
export class EjemploSignalComponent {

  private _serviceSignal : SignalService = inject(SignalService);

  public contador = this._serviceSignal.contador;

  reiniciarContador(): void {
    this._serviceSignal.reiniciarContador();
  }

  incrementarContador(): void {
    this._serviceSignal.incrementarContador();
  }
}
