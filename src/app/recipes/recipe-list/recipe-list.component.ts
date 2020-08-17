import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model'
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recivedRecipeList = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe("Test Recipe 01", "Simpletest 01 one", "https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4.jpg"),
        new Recipe("Test Recipe 02", "Simpletest  02 one", "https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4.jpg")

    ]
    constructor() { }

    ngOnInit() {
    }

    selectRecipe(recipe: Recipe) {
        this.recivedRecipeList.emit(recipe)
    }

}
