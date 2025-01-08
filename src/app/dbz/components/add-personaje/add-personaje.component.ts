import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    id: '',
    nombre: '',
    fuerza: 0
  }

  public addPersonaje(): void {

    // debugger;

    console.log(this.personaje);
    if ( this.personaje.nombre.length === 0 ) return;

    this.onNewPersonaje.emit(this.personaje);

    // Inicializamos el personaje
    this.personaje = {
      id: '',
      nombre: '',
      fuerza: 0 };
    // this.personaje.nombre = '';
    // this.personaje.fuerza = 0;

  }
}
