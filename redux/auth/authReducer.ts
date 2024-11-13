import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../utils/types/user";

const authReducer = createSlice({
  name: "currentUser",
  initialState: {
    currentUser: {} as User,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = {
        ...state.currentUser,
        ...(action.payload as User),
      };
    },
    resetUser(state) {
      state.currentUser = {} as User;
    },
  },
});

export const { setCurrentUser, resetUser } = authReducer.actions;

export default authReducer.reducer;
