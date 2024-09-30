import { createSlice } from "@reduxjs/toolkit";

const ConnectionSlice = createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addConnectionData:(state,action)=>action.payload
    }
});


export const {addConnectionData} = ConnectionSlice.actions;

export default ConnectionSlice.reducer