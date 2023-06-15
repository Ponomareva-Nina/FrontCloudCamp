import { createSlice } from "@reduxjs/toolkit";
import { Nullable } from "../../interfaces/util-types";
import { User } from "../../interfaces/user.interface";
import { mockUser } from "../../mock-data/mock-user";

interface UserState {
  entity: Nullable<User>;
  isLoading: boolean;
}

const initialState: UserState = {
  entity: mockUser,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const { reducer } = userSlice;
