import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model'
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe("Test Recipe", "Simpletest one", "https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4.jpg"),
        new Recipe("Test Recipe", "Simpletest one", "https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-4.jpg")

    ]
    constructor() { }

    ngOnInit() {
    }

}
