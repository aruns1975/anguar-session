import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName = 'Arun' ;
  lastName = 'Subramonia Sarma';

  changeFirstName() {
    this.firstName = 'Kumar';
  }
}


