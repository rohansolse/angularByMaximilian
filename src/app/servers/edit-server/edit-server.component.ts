import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
    server: { id: number, name: string, status: string };
    serverName = '';
    serverStatus = '';
    constructor(private serverservice: ServersService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        console.log(this.route.snapshot.queryParams);
        console.log(this.route.snapshot.fragment);
        this.server = this.serverservice.getServer(1);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status
    }

    onUpdateServer() {
        this.serverservice.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus })
    }

}
