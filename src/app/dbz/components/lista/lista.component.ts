import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  @Input()
  public listaPersonajes: Personaje[] = [
  //   {
  //   nombre: 'Trunks',
  //   fuerza: 3500
  // }
  ]

  // Elmiknar asdsadlsa
  public deletetePersonaje(id: string): void {
    this.onDeletePersonaje.emit(id);
  }

}
