import {Component, OnInit} from '@angular/core';
import {SquadsService} from "../../../services/squads/squads.service";
import {SquadModel} from "../../../models/squad-model";
import {UsersService} from "../../../services/users/users.service";

@Component({
  selector: 'app-lobby-squad',
  templateUrl: './lobby-squad.component.html',
  styleUrls: ['./lobby-squad.component.scss'],
})
export class LobbySquadComponent implements OnInit {

  constructor(private squadsService: SquadsService, private usersService: UsersService) {
  }

  squad: SquadModel;
  hasJoined: boolean;

  async ngOnInit() {
    const splitURl = window.location.href.split('/');
    this.squad = history.state.squad && history.state.squad._id === splitURl
      ? history.state.squad
      : await this.retrieveSquadData(splitURl);
    this.hasJoined = this.squad?.userIds.includes(this.usersService.user._id);
  }

  retrieveSquadData(splitURl) {
    return this.squadsService.getSquad(splitURl[splitURl.length - 1])
  }

  deleteSquad() {
  }

  joinSquad() {
    this.squad = {...this.squad, userIds: [...this.squad.userIds, this.usersService.user._id], users: [...this.squad.users, this.usersService.user]}
    console.log(this.squad);
    this.squadsService.updateSquad({_id: this.squad._id, userIds: this.squad.userIds});
  }



}
