import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';


@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

    public personajes: Personaje[] = [
      {
        id: uuid(),
        nombre: 'Goku',
        fuerza: 50000
      },
      {
        id: uuid(),
        nombre: 'Gohan',
        fuerza: 30000
      },
      {
        id: uuid(),
        nombre: 'Mutenroshi',
        fuerza: 300
      },
      {
        id: uuid(),
        nombre: 'Vegeta',
        fuerza: 45000
      },
      {
        id: uuid(),
        nombre: 'Krilin',
        fuerza: 150
      }
    ];


    public addPersonaje(personaje: Personaje): void {
      // const newPersonaje: Personaje = { id: uuid(), ...personaje };
      // const newPersonaje: Personaje = {
      //   id: uuid(),
      //   nombre: personaje.nombre,
      //   fuerza: personaje.fuerza };
      personaje.id = uuid();
      this.personajes.push(personaje);
      // this.personajes.push(newPersonaje);
    }

    public deletePersonajeById(id: string): void {
      this.personajes = this.personajes.filter(personaje => personaje.id !== id)
    }
    // public deletePersonaje(indice: number): void {
    //   this.personajes.splice(indice, 1);
    // }
}
