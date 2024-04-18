import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const CrudSlice = createSlice({
  name: "crud",
  initialState: {
    name: "",
    userName: "",
    newUser: [],
    editid: null,
    // editflag: false,
    isToaster: false,
  },
  reducers: {
    setNameInput(state, action) {
      state.name = action.payload;
    },
    setUserNameInput(state, action) {
      state.userName = action.payload;
    },
    setNewUser(state, action) {
      action.payload.preventDefault();

      console.log(state.newUser, "444");

      if (state.editid !== null) {
        
        state.newUser[state.editid] = {
          name: state.name,
          userName: state.userName,
        };
        state.name = "";
        state.userName = "";
        state.editid = null;
        toast('Successfully Edited User')
      } else {
        if (state.name !== "" && state.userName !== "") {
          state.newUser = [
            ...state.newUser,
            { name: state.name, userName: state.userName },
          ];
        toast('Added New User')

        } else {
         toast("Please Fill All The Fields");
        }
      }

      // state.newUser = JSON.parse(localStorage.getItem("data"));
      console.log(state.newUser, "333");
      state.name = "";
      state.userName = "";

      console.log(state.newUser, "newuser");
    },

    setEdit(state, action) {
      console.log(state.newUser, "000");
      // state.editflag = true;
      state.editid = action.payload;
      state.name = state.newUser[action.payload].name;
      state.userName = state.newUser[action.payload].userName;

      // state.newUser[action.payload]
    },
    setDelete(state, action) {
      toast("deleted");

      state.newUser = state.newUser.filter((item, id) => id !== action.payload);
    },
  },
});
export const {
  setUserNameInput,
  setNameInput,
  setNewUser,
  setEdit,
  setDelete,
} = CrudSlice.actions;
export default CrudSlice.reducer;
