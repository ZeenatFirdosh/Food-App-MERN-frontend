import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: JSON.parse(localStorage.getItem("login"))?.email || "",
  firstName: JSON.parse(localStorage.getItem("login"))?.firstName || "",
  image: JSON.parse(localStorage.getItem("login"))?.image || "",
  lastName: JSON.parse(localStorage.getItem("login"))?.lastName || "",
  _id: JSON.parse(localStorage.getItem("login"))?._id || "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data,"action.payload.data");
      //   state.user = action.payload.data;
      state._id = action.payload.data._id;
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
      localStorage.setItem("login", JSON.stringify(action.payload.data));
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.image = "";
      localStorage.removeItem("login");
    },
  },
});

export const { loginRedux ,logoutRedux} = userSlice.actions;

export default userSlice.reducer;
