import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SquadPageRoutingModule} from './squad-routing.module';

import {SquadPage} from './squad.page';
import {CreateSquadComponent} from "./create-squad/create-squad.component";
import {QRCodeModule} from "angularx-qrcode";
import {FindSquadComponent} from "./find-squad/find-squad.component";
import {LobbySquadComponent} from "./lobby-squad/lobby-squad.component";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SquadPageRoutingModule,
    QRCodeModule,
    ComponentsModule
  ],
  declarations: [SquadPage, CreateSquadComponent, FindSquadComponent, LobbySquadComponent]
})
export class SquadPageModule {
}
