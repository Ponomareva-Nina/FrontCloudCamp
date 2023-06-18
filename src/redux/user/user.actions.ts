/* eslint-disable consistent-return */
/* eslint-disable func-names */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileForm } from "../../interfaces/profile-form.interface";
import { BASE_URL_API } from "../../constants/api-constants";

export const submitUserForm = createAsyncThunk(
  "user/submitUserForm",
  async function (details: ProfileForm, { rejectWithValue }) {
    try {
      const res = await fetch(BASE_URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      if (!res.ok) {
        throw new Error("Server error");
      }
      return await res.json();
    } catch (error: unknown) {
      const err = error as Error;
      rejectWithValue(err.message);
    }
  }
);
