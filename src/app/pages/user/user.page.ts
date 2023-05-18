import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import {UsersService} from "../../services/users/users.service";
import {Ranks} from "../../models/globals/ranks";
import {Roles} from "../../models/globals/roles";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  constructor(private userService: UsersService) {}

  MarcID = environment.marcId;
  userData: UserModel;

  ranks = Ranks;

  roles = Roles;

  async ngOnInit() {
    this.userData = this.userService.user;
  }

  async saveChanges() {
    this.userData = await this.userService.updateUserById(
      this.MarcID,
      this.userData
    );
    console.log(this.userData);
  }

  unsorted(): void { }
}
