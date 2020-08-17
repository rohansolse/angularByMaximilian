import {
    Component, OnInit, Input,
    ViewEncapsulation, OnChanges, SimpleChanges,
    DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy,
    ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
    OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked, OnDestroy {
    @Input('srvElement') element: { name: string, type: string, content: string }
    @Input() name: string;
    @ViewChild('heading') header: ElementRef
    @ContentChild('contentPara') paragraph: ElementRef
    constructor() {
        console.log("constructor called!");
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("ngOnChanges called!");
        console.log(changes);
    }

    ngOnInit(): void {
        console.log("ngOnInit called!");
    }

    ngDoCheck() {
        console.log("ngDoCheck");
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
        console.log("11 L: ", this.paragraph.nativeElement.textContent);

    }

    ngAfterContentChecked() {
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
        console.log("00 : ", this.header.nativeElement.textContent);
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
    }


}
