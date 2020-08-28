import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>()
    constructor() { }
    private recipes: Recipe[] = [
        new Recipe("Test Recipe 01", "Simpletest 01 one", "../../../assets/01.jpg", [
            new Ingredients("Meat", 1),
            new Ingredients("Fires", 2)
        ]),
        new Recipe("Test Recipe 02", "Simpletest  02 one", "../../../assets/Recipe_logo.jpeg", [
            new Ingredients("Rice", 1),
            new Ingredients("Wheat", 2)
        ])
    ]

    getRecipes() {
        return this.recipes.slice()
    }
}
