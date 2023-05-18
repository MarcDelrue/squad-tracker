import {UserModel} from "./user-model";

export interface SquadModel {
  _id: string;
  name: string;
  maxUser?: number;
  userIds?: string[];
  users?: UserModel[];
}
