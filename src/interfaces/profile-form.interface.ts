export interface ProfileForm {
  nickname: string;
  name: string;
  surname: string;
  sex: Sex | string;
  advantages: Array<string | undefined>;
  checkboxGroup: Array<number>;
  radioGroup: Array<number>;
  about: string;
}

export enum Sex {
  MALE = "man",
  FEMALE = "woman",
}
