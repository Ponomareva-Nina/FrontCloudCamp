import { Nullable } from "./util-types";

export interface User {
  phone: string;
  email: string;
  name: string;
  sername: string;
  socials: Socials;
  details: Nullable<UserDetails>;
}

export interface Socials {
  telegram: string;
  github: string;
  resume: string;
}

export interface UserDetails {
  nickname: string;
  sex: Sex;
  advantages: Array<string>;
  checkboxInfo: string;
  radioInfo: string;
  about: string;
}

export enum Sex {
  MALE = "man",
  FEMALE = "woman",
}
