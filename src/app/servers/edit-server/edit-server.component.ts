import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  constructor(private serverservice: ServersService) { }

  ngOnInit(): void {
    this.server = this.serverservice.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status
  }

  onUpdateServer() {
    this.serverservice.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus })
  }

}
