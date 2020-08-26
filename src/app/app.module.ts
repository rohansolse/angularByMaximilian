import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingstatusService } from './services/loggingstatus.service';
import { AccountsService } from './services/accounts.service';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LoggingstatusService, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
