import { configureStore } from "@reduxjs/toolkit";
import { CountSlice } from "../Features/Slice/Count";
import {CrudSlice} from "../Features/Slice/CrudSlice";

 export const Store=configureStore({
    reducer:{
    //  count:CountSlice.reducer
      crud:CrudSlice.reducer
    }
}
)