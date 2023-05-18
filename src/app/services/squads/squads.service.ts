import {Injectable} from '@angular/core';
import {lastValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UsersService} from "../users/users.service";
import {SquadModel} from "../../models/squad-model";

const SQUADS_ROUTE = 'squads/';

@Injectable({
  providedIn: 'root'
})
export class SquadsService {

  apiURL = environment.apiUrl;

  constructor(private http: HttpClient, private userService: UsersService) {
  }

  async createSquad(squadData: Partial<SquadModel>): Promise<SquadModel> {
    let createdSquad = await lastValueFrom(this.http.post<SquadModel>(this.apiURL + SQUADS_ROUTE, {
      ...squadData,
      userIds: [this.userService.user._id]
    }))
    createdSquad = { ...createdSquad, users: [this.userService.user] }
    return createdSquad;
  }

  getSquad(id): Promise<SquadModel> {
    return lastValueFrom(this.http.get<SquadModel>(this.apiURL + SQUADS_ROUTE + id));
  }

  updateSquad(newSquad: Partial<SquadModel>) {
    return lastValueFrom(this.http.patch<SquadModel>(this.apiURL + SQUADS_ROUTE + newSquad._id, newSquad));
  }
}
