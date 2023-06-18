/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
  reducers: {
    changePhone: (state, action: PayloadAction<string>) => {
      if (state.entity) {
        state.entity.phone = action.payload;
      }
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      if (state.entity) {
        state.entity.email = action.payload;
      }
    },
  },
});

export const { reducer } = userSlice;
export const { changePhone, changeEmail } = userSlice.actions;
