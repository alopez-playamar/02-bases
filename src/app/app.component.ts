import { Component } from '@angular/core';

import { ContadorModule } from './contador/components/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ContadorModule, HeroesModule, DbzModule]
})
export class AppComponent {
  public title: string = 'A llorar, a la llorería';
  public contador: number = 50;

  incrementarPor(): void {
    this.contador += 1;
  }
}
