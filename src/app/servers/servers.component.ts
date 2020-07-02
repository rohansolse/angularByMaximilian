import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    enableServer: boolean = false
    serverCreateStatus: string = "No server was created"
    serverName: string = "test"
    serverNameShow = false
    servers = ["Test1", "Test2"]
    constructor() {
        setTimeout(() => {
            this.enableServer = true
        }, 3 * 1000);
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverNameShow = true
        this.servers.push(this.serverName)
        this.serverCreateStatus = "Server was created. Name is " + this.serverName
    }

    onUpdateServerName(event) {
        // this.serverName = event.target.value
        this.serverName = (<HTMLInputElement>event.target).value
    }

}
