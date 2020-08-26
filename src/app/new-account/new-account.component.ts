import { Component, OnInit } from '@angular/core';
import { LoggingstatusService } from '../services/loggingstatus.service';
import { AccountsService } from '../services/accounts.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {

    constructor(private loggingservice: LoggingstatusService,
        private accountservice: AccountsService) {
        this.accountservice.statusUpdated.subscribe(
            (status: string) => alert(`New Status ${status}`)
        )
    }

    ngOnInit(): void {
    }

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountservice.addAccount(accountName, accountStatus)
        // this.loggingservice.loggingStatus(accountStatus)
    }

}
