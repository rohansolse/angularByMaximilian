import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggingstatusService } from '../services/loggingstatus.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

    constructor(private loggingservice: LoggingstatusService) { }

    ngOnInit(): void {
    }

    @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountAdded.emit({
            name: accountName,
            status: accountStatus
        });
        this.loggingservice.loggingStatus(accountStatus)
    }

}
