import { Nullable } from "./util-types";

export interface ProfileForm {
  nickname: string;
  name: string;
  surname: string;
  sex: Sex | string;
  advantages: Array<string | undefined>;
  checkboxGroup: Array<number>;
  checkboxChecked: Array<string>;
  radioGroup: Array<number>;
  radioChecked: Nullable<string>;
  about: string;
}

export enum Sex {
  MALE = "man",
  FEMALE = "woman",
}
