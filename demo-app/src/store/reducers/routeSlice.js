import { createSlice } from "@reduxjs/toolkit";
import { demoRoutes,userRoutes } from "routes";


export const routeLinkSlice =createSlice({
  name:'routeLink',
  initialState:{
    routing:userRoutes
  },
  reducers:{




    changeRoute:(state,{payload})=>{
      console.log(state.routing);
      console.log('payload@@@@@@@@',payload);

      state.routing=[...userRoutes,...payload]

    }
  }



})
export const { changeRoute} = routeLinkSlice.actions;
export default routeLinkSlice.reducer;
