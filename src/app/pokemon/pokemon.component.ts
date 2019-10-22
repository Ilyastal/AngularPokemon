import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pkd-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  @Input() pkm: [];
  
  constructor() {

  }

  ngOnInit() {
  }

}
