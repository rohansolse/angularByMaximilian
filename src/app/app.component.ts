import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Rohan Solse"
  numbers = [1, 2, 3, 4, 5]
  onlyOdd = false
}
