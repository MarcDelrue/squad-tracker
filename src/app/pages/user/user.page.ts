import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserModel } from '../../models/user-model';
import { Roles } from '../../models/roles';
import { Ranks } from '../../models/ranks';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  constructor(private userService: UsersService) {}

  MarcID = '62b2029da72fc5339dedae9b';
  userData: UserModel;

  ranks = Ranks;

  roles = Roles;

  async ngOnInit() {
    this.userData = await this.userService.getUserById(this.MarcID);
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
