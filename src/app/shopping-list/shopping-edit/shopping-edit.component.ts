import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInput: ElementRef
    @ViewChild('amountInput') amountInput: ElementRef
    constructor(private shlistservice: ShoppingListService) { }

    ngOnInit() {
    }

    addIngredients() {
        let iName = this.nameInput.nativeElement.value
        let iAmount = this.amountInput.nativeElement.value
        const newIngredient = new Ingredients(iName, iAmount)
        this.shlistservice.updateShList(newIngredient)
    }
}
