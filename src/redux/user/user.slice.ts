/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Nullable } from "../../interfaces/util-types";
import { User } from "../../interfaces/user.interface";
import { mockUser } from "../../mock-data/mock-user";
import { submitUserForm } from "./user.actions";

interface UserState {
  entity: Nullable<User>;
  formSubmitted: Nullable<string>;
  isLoading: boolean;
}

const initialState: UserState = {
  entity: mockUser,
  formSubmitted: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(submitUserForm.fulfilled, (state, action) => {
        state.formSubmitted = action.payload.message;
        state.isLoading = false;
      })
      .addCase(submitUserForm.rejected, (state, action) => {
        state.formSubmitted = action.error.message || "rejected";
        state.isLoading = false;
      })
      .addCase(submitUserForm.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { reducer } = userSlice;
export const { changePhone, changeEmail } = userSlice.actions;
