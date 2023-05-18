import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-squad',
  templateUrl: './squad.page.html',
  styleUrls: ['./squad.page.scss'],
})
export class SquadPage implements OnInit {

  constructor(private nav: NavController) {
  }

  ngOnInit() {
  }

  goToFind() {
    this.nav.navigateForward('squad/find');
  }

  goToCreate() {
    this.nav.navigateForward('squad/create');
  }

}
