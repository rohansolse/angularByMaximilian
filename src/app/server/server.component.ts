import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverId: number = 10
    serverStatus: string = "online"
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline"
        this.serverId = Math.random() > 0.5 ? 10 : 8
    }
    getServerName() {
        return Math.random() > 0.5 ? "Production Server" : "Dev Server"
    }
    getColor() {
        return this.serverStatus == "online" ? "green" : "red"
    }
}