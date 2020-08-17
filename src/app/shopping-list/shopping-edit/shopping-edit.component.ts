import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInput: ElementRef
    @ViewChild('amountInput') amountInput: ElementRef
    @Output() ingredientAdded = new EventEmitter<Ingredients>();
    constructor() { }

    ngOnInit() {
    }

    addIngredients() {
        let iName = this.nameInput.nativeElement.value
        let iAmount = this.amountInput.nativeElement.value
        const newIngredient = new Ingredients(iName, iAmount)
        this.ingredientAdded.emit(newIngredient)
    }
}
