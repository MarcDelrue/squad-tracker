import { Component, OnInit, Input } from '@angular/core';
import {UserModel} from "../../models/user-model";
import {Ranks} from "../../models/globals/ranks";
import {Roles} from "../../models/globals/roles";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent  implements OnInit {

  @Input() users: UserModel[];
  ranks = Ranks;
  roles = Roles;

  constructor() { }

  ngOnInit() {}

}
