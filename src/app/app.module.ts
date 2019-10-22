import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [
    
  AppComponent,
    
  NavigationComponent,
    
  PokedexComponent,
    
  PokemonComponent,
    
  TruncatePipe],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
