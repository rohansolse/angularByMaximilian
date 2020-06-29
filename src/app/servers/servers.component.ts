import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    enableServer: boolean = false
    constructor() {
        setTimeout(() => {
            this.enableServer = true
        }, 3 * 1000);
    }

    ngOnInit() {
    }

}
