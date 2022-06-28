import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor() { }

  ranks = [
    {name: 'Recruit', value: 'Rct'},
    {name: 'Specialist', value: 'Spe'},
    {name: 'Corporal', value: 'Cpl'},
    {name: 'Sergeant', value: 'Sgt'},
    {name: 'Sergeant Major', value: 'Sgt.M'},
  ]

  roles = [
    {name: 'Soldier', value: 'soldier'},
    {name: 'Radio', value: 'radio'},
    {name: 'Engineer', value: 'engineer'},
    {name: 'Gunner', value: 'gunner'},
    {name: 'Medic', value: 'medic'},
    {name: 'Leader', value: 'leader'},
  ]

  ngOnInit() {
  }

}
