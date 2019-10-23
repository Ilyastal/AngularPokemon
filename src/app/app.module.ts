import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TruncatePipe } from './truncate.pipe';
import { from } from 'rxjs';

import{ ROUTES } from './app.routes'



@NgModule({
  declarations: [
    
  AppComponent,
    
  NavigationComponent,
    
  PokedexComponent,
    
  PokemonComponent,
    
  TruncatePipe],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
