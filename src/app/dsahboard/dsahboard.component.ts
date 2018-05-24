import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dsahboard',
  templateUrl: './dsahboard.component.html',
  styleUrls: ['./dsahboard.component.css']
})
export class DsahboardComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}
