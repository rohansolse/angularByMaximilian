import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingstatusService } from '../services/loggingstatus.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    constructor(private loggingservice: LoggingstatusService) { }

    ngOnInit(): void {
    }
    @Input() account: { name: string, status: string };
    @Input() id: number;
    @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();


    onSetTo(status: string) {
        this.statusChanged.emit({ id: this.id, newStatus: status });
        this.loggingservice.loggingStatus(status)
    }
}
