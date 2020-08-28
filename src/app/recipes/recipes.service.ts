import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>()
    constructor() { }
    private recipes: Recipe[] = [
        new Recipe("Test Recipe 01", "Simpletest 01 one", "../../../assets/01.jpg"),
        new Recipe("Test Recipe 02", "Simpletest  02 one", "../../../assets/Recipe_logo.jpeg")
    ]

    getRecipes() {
        return this.recipes.slice()
    }
}
