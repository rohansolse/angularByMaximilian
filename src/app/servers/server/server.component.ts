import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: { id: number, name: string, status: string };
  constructor(private serversservice: ServersService) { }

  ngOnInit(): void {
    this.server = this.serversservice.getServer(1)
  }

}
