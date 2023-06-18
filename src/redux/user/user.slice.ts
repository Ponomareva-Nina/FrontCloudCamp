/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Nullable } from "../../interfaces/util-types";
import { User } from "../../interfaces/user.interface";
import { mockUser } from "../../mock-data/mock-user";
import { submitUserForm } from "./user.actions";
import { ProfileForm } from "../../interfaces/profile-form.interface";

interface UserState {
  entity: Nullable<User>;
  detailedInfo: Nullable<ProfileForm>;
  isLoading: boolean;
}

const initialState: UserState = {
  entity: mockUser,
  detailedInfo: null,
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
        state.detailedInfo = action.payload.details;
        state.isLoading = false;
      })
      .addCase(submitUserForm.rejected, (state) => {
        state.detailedInfo = null;
        state.isLoading = false;
      })
      .addCase(submitUserForm.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { reducer } = userSlice;
export const { changePhone, changeEmail } = userSlice.actions;
