import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public nombresHeroes: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gohan'];
  public heroeEliminado?: string;

  public eliminaUltimoHeroe(): void {
    this.heroeEliminado = this.nombresHeroes.pop();
  }
}
