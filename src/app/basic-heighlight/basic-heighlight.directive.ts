import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: '[appBasicHeighlight]'
})

export class BasicHeightlightDirectives implements OnInit {

    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = "Red"
    }
}