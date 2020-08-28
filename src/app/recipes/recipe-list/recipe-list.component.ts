import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model'
import { RecipesService } from '../recipes.service';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[]
    constructor(private recipesservice: RecipesService) { }

    ngOnInit() {
        this.recipes = this.recipesservice.getRecipes()
    }



}
