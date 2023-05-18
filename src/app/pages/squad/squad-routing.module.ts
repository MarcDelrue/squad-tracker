import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SquadPage } from './squad.page';
import {CreateSquadComponent} from "./create-squad/create-squad.component";
import {FindSquadComponent} from "./find-squad/find-squad.component";
import {LobbySquadComponent} from "./lobby-squad/lobby-squad.component";

const routes: Routes = [
  {
    path: 'create',
    component: CreateSquadComponent
  },
  {
    path: 'find',
    component: FindSquadComponent
  },
  {
    path: ':id',
    component: LobbySquadComponent
  },
  {
    path: '',
    component: SquadPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SquadPageRoutingModule {}
