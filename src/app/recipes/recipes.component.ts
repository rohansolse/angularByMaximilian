import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    selectedRecipe: Recipe;
    constructor(private recipeservice: RecipesService) { }

    ngOnInit() {
        this.recipeservice.recipeSelected.subscribe((recipe: Recipe) => {
            this.selectedRecipe = recipe
        })
    }

}
