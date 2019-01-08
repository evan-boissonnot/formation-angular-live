import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { ingredients } from '../models/ingredients';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredientList: Ingredient[];

  constructor() {
    console.log('je me construis');
   }

  ngOnInit() {
    console.log(new Date());

    this.ingredientList = ingredients;
  }

}
