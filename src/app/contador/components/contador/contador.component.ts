import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
  Hola Mundo, soy el contador
  `,
  standalone: false,
})
export class ContadorComponent {

  public title: string = 'A llorar, a la llorería';
  public contador: number = 50;

  incrementarPor(): void {
    this.contador += 1;
  }
}

