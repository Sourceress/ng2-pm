import { Component, Inject } from '@angular/core';

@Component({
  selector: 'pm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;

  constructor(@Inject('environment') public environment: string) {
    this.name = 'AppComponent';
  }
}
