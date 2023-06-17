export interface ProfileForm {
  nickname: string;
  name: string;
  surname: string;
  sex: Sex | string;
  advantages: Array<string | undefined>;
  checkboxInfo: Array<string | undefined>;
  radioInfo: string;
  about: string;
}

export enum Sex {
  MALE = "man",
  FEMALE = "woman",
}
