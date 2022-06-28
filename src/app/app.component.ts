import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'User', url: 'User', icon: 'person' },
    { title: 'Squad', url: 'Squad', icon: 'people' },
  ];
  constructor() {}
}
