import {Component, OnInit} from '@angular/core';
import {UsersService} from "./services/users/users.service";
import {environment} from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  loaded: boolean = false;
  public appPages = [
    { title: 'User', url: 'user', icon: 'person' },
    { title: 'Squad', url: 'squad', icon: 'people' },
    { title: 'Map', url: 'map', icon: 'map' },
  ];
  constructor(private userService: UsersService) {
  }

  async ngOnInit() {
    await this.userService.setCurrentUser(environment.marcId);
    this.loaded = true;
  }
}
