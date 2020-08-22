import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHeighlight]'
})
export class BetterHeighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() heighlightColor: string = 'gray';

    @HostBinding('style.backgroundColor')
    backgroudColor: string = 'transparent';
    constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

    ngOnInit() {
        this.backgroudColor = this.defaultColor
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gray')
    }

    @HostListener('mouseover') mouseover(eventData: ElementRef) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'gray')
        // this.backgroudColor = 'gray'
        this.backgroudColor = this.heighlightColor
    }

    @HostListener('mouseleave') mouseleave(eventData: ElementRef) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
        // this.backgroudColor = 'transparent'
        this.backgroudColor = this.defaultColor

    }

}
