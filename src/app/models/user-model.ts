import {Coordinates} from "./coordinates-model";

export interface UserModel {
  _id: string;
  name: string;
  rank?: string;
  roles?: string[];
  coordinates: Coordinates;
}
