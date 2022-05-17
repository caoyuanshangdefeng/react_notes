import { createSlice } from "@reduxjs/toolkit";


export const routeLinkSlice =createSlice({
  name:'routeLink',
  initialState:{
    routing:[]
  },
  reducers:{
    changeRoute:(state,{payload})=>{
      console.log('payload@@@@@@@@',payload);

      state.routing=payload
      console.log('state.routing',state.routing);
    }
  }



})
export const { changeRoute} = routeLinkSlice.actions;
export default routeLinkSlice.reducer;
