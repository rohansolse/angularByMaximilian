import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe: Recipe
    constructor(private shlistservice: ShoppingListService) { }

    ngOnInit() {
    }
    addToShoppingList() {
        this.shlistservice.updateMealShList(this.recipe.ingredients)
    }
}
