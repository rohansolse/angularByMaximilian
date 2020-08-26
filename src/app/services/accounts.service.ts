import { Injectable } from '@angular/core';
import { LoggingstatusService } from './loggingstatus.service';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {

    constructor(private loggingservice: LoggingstatusService) { }

    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    addAccount(name, status) {
        this.accounts.push({ name: name, status: status });
        this.loggingservice.loggingStatus(status)

    }

    updateAccount(id, status) {
        this.accounts[id].status = status;
        this.loggingservice.loggingStatus(status)

    }
}
