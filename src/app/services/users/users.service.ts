import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserModel} from "../../models/user-model";
import {environment} from "../../../environments/environment";

const USERS_ROUTE = 'users/';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  apiURL = environment.apiUrl;

  getUsers(): Promise<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiURL + USERS_ROUTE).toPromise();
  }

  getUserById(id: string): Promise<UserModel> {
    return this.http.get<UserModel>(this.apiURL + USERS_ROUTE + id).toPromise();
  }

  updateUserById(id: string, newData: Partial<UserModel>): Promise<UserModel> {
    console.log(newData);
    return this.http
      .patch<UserModel>(this.apiURL + USERS_ROUTE + id, newData)
      .toPromise();
  }
}
