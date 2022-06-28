import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'User', url: 'user', icon: 'person' },
    { title: 'Squad', url: 'squad', icon: 'people' },
  ];
  constructor() {}
}
