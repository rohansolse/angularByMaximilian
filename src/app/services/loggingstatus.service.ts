import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggingstatusService {

    constructor() { }

    loggingStatus(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
