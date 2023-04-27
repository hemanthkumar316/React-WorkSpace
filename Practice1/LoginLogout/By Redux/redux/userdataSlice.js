import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.userName = action.payload;
    },
  },
});
// export const userReducer = userSlice.reducer;
// const { getData } = userSlice.actions;

export const { getData } = userSlice.actions;
export default userSlice.reducer;
