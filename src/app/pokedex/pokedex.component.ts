import { Component, OnInit } from '@angular/core';

import pokemonData from './pokemon.data'
import { Pokemon, Type } from '../pokemon/pokemon.model';

@Component({
  selector: 'pkd-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  private pokemon_list: Array<Pokemon>;
  private pokemonHoveredMessage: string;

  constructor() { 
    this.pokemon_list = [];
    this.pokemonHoveredMessage='';
    pokemonData.forEach(p =>{
      // let types: Type[] = [];
      // p.types.forEach(t => types.push(Type[t]));
      // this.pokemon_list.push(new Pokemon(p.specie, p.description, types));
      this.pokemon_list.push(new Pokemon(p.specie, p.description, p.types.map(x => Type[x])));
    });
  }

  ngOnInit() {
  }

}
