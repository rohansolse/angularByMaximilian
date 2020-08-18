import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHeighlight]'
})
export class BetterHeighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
  }

}
