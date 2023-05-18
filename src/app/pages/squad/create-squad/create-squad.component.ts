import {Component, OnInit} from '@angular/core';
import {SquadsService} from "../../../services/squads/squads.service";

@Component({
  selector: 'app-create-squad',
  templateUrl: './create-squad.component.html',
  styleUrls: ['./create-squad.component.scss'],
})
export class CreateSquadComponent implements OnInit {

  constructor(private squad: SquadsService) {
  }

  squadName: string = 'New Squad';
  qr = '64660e36ab83519446a3fd10';

  ngOnInit() {
    // this.squad.createSquad(this.squadName).then((res) => {
    //   console.log(res);
    // });
    // 64660e36ab83519446a3fd10
  }
}
