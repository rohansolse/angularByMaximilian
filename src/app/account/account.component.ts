import { Component, OnInit, Input } from '@angular/core';
import { LoggingstatusService } from '../services/loggingstatus.service';
import { AccountsService } from '../services/accounts.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    constructor(private loggingservice: LoggingstatusService,
        private accountservice: AccountsService) { }

    ngOnInit(): void {
    }
    @Input() account: { name: string, status: string };
    @Input() id: number;


    onSetTo(status: string) {
        this.accountservice.updateAccount({ id: this.id, newStatus: status })
        this.loggingservice.loggingStatus(status)
    }
}
