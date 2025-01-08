import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-heroes-heroe',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre: string = "Goku";
  public edad: number = 32;

  public get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  public getDescripcionHeroe(): string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  private getNombrePrivado(): string {
    return 'Kakarot';
  }

  public cambiarNombre(): void {
    this.nombre = "Kakarot"
  }

  public cambiarEdad(): void {
    this.edad = 45;
  }

  public resetDatos(): void {
    this.nombre = "Goku"
    this.edad = 32;
  }
}
