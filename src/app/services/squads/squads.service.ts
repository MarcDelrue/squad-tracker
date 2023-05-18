import {Injectable} from '@angular/core';
import {lastValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const SQUADS_ROUTE = 'squads/';

@Injectable({
  providedIn: 'root'
})
export class SquadsService {

  apiURL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  createSquad(name): Promise<Object> {
    return lastValueFrom(this.http.post(this.apiURL + SQUADS_ROUTE, {name}));
  }
}
