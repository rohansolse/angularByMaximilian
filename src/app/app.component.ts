import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    seletedFeature: string = 'recipe'

    getFeature(feature: string) {
        // console.log(feature);
        this.seletedFeature = feature
    }
}
