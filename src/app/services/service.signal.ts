import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignalService {
  public contador = signal(0);

  public doble = computed(() => {
    return this.contador() * 2;
  });

  reiniciarContador(): void {
    this.contador.set(0);
  }

  incrementarContador(): void {
    this.contador.update((valorActual) => valorActual + 1);
  }
}
