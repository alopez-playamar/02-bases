import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeComponent } from './components/heroe/heroe.component';
import { ListaComponent } from './components/lista/lista.component';


@NgModule({
  imports: [CommonModule],
  exports: [HeroeComponent, ListaComponent],
  declarations: [HeroeComponent, ListaComponent],
  providers: [],
})
export class HeroesModule {
 }
