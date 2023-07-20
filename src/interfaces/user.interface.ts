export interface User {
  phone: string;
  email: string;
  name: string;
  surname: string;
  socials: Socials;
}

export interface Socials {
  telegram: string;
  github: string;
  resume: string;
}
