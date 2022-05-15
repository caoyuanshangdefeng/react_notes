import { createSlice } from "@reduxjs/toolkit";
import loginRouter from "router/login";

export const routeLinkSlice =createSlice({
  name:'routeLink',
  initialState:{
    routing:loginRouter
  },
  reducers:{
    changeRoute:(state,{payload})=>{
      console.log(payload);

      state.routing=payload
    }
  }



})
export const { changeRoute} = routeLinkSlice.actions;
export default routeLinkSlice.reducer;
