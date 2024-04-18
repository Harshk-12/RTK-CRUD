import { createSlice } from "@reduxjs/toolkit"
 export const CountSlice=createSlice({
    name:'count',
    initialState:{value:0},
    reducers:{
        inc(state){
        state.value+=1
        },
        dec(state){
          state.value-=1
        }
    }

})

export const {inc,dec}=CountSlice.actions
export default CountSlice.reducer


