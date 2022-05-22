import { createSlice } from "@reduxjs/toolkit";
import { baseRoutes} from "@/routes";


export const routeLinkSlice =createSlice({
  name:'routeLink',
  initialState:{
    routing:[]
  },
  reducers:{




    changeRoute:(state,{payload})=>{
      console.log(state.routing);
      console.log('payload@@@@@@@@',payload);

      state.routing=[...baseRoutes.baseRoutes,...payload.routerMenu]

    }
  }



})
export const { changeRoute} = routeLinkSlice.actions;
export default routeLinkSlice.reducer;
