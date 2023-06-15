export interface User {
  phone: string;
  email: string;
  name: string;
  sername: string;
  socials: Socials;
}

export interface Socials {
  telegram: string;
  github: string;
  resume: string;
}

export enum Sex {
  MALE = "man",
  FEMALE = "woman",
}
