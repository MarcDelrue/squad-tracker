import {Coordinates} from "./coordinates-model";

export interface UserModel {
  name: string;
  rank?: string;
  roles?: string[];
  coordinates: Coordinates;
}
