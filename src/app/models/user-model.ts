import { Roles } from './roles';

export interface UserModel {
  name: string;
  rank?: string;
  roles?: string[];
}
