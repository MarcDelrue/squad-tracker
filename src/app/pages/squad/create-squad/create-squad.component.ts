import {Component, OnInit} from '@angular/core';
import {SquadsService} from "../../../services/squads/squads.service";
import {SquadModel} from "../../../models/squad-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-squad',
  templateUrl: './create-squad.component.html',
  styleUrls: ['./create-squad.component.scss'],
})
export class CreateSquadComponent implements OnInit {

  constructor(private squad: SquadsService, private router: Router) {
  }

  newSquad: Partial<SquadModel> = {
    name: 'New Squad',
    maxUser: 4
  }

  ngOnInit() {
  }

  async createSquad() {
    this.newSquad = await this.squad.createSquad(this.newSquad)
    this.router.navigate(['squad/64664dda5e2a844f98997b08'], {state: {squad: this.newSquad}})
  }
}
