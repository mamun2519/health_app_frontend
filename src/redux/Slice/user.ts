import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  user: {
    userId: string | null;
    email: string | null;
    role: string | null;
  };
}

const initialState: IUserState = {
  user: {
    userId: null,
    email: null,
    role: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.userId = action.payload?.userId;
      state.user.email = action.payload?.email;
      state.user.role = action.payload?.role;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
