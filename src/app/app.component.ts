import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    accounts: { name: string, status: string }[] = []
    constructor(private accountservice: AccountsService) { }

    ngOnInit() {
        this.accounts = this.accountservice.accounts
    }
}
