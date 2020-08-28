import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredients[]>();
    private ingredients: Ingredients[] = [
        new Ingredients("Apple", 12),
        new Ingredients("Mango", 2),
    ]

    constructor() { }

    getShList() {
        return this.ingredients.slice()
    }

    updateShList(ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientChanged.emit(this.ingredients.slice())
    }

    updateMealShList(ingredients) {
        console.log(ingredients);
        this.ingredients.push(...ingredients)
        this.ingredientChanged.emit(this.ingredients.slice())
    }
}
