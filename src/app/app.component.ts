import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    serverElements = [{
        name : "Test server",
        type : "server",
        content : "Just a Content!"
    }];

    onServerAdded(severData:{serverName:'string',serverContent:'string'}) {
        this.serverElements.push({
            type: 'server',
            name: severData.serverName,
            content: severData.serverContent
        });
    }

    onBlueprintAdded(blurprintData:{serverName:'string',serverContent:'string'}) {
        this.serverElements.push({
            type: 'blueprint',
            name: blurprintData.serverName,
            content: blurprintData.serverContent
        });
    }

}