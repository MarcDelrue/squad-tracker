import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SquadPageRoutingModule } from './squad-routing.module';

import { SquadPage } from './squad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SquadPageRoutingModule
  ],
  declarations: [SquadPage]
})
export class SquadPageModule {}
