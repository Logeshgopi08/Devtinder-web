import { createSlice } from "@reduxjs/toolkit";

const RequestSlice =createSlice({
    name:"request",
    initialState:null,
    reducers:{
        addRequestData:(state,action)=>{
          return  state = action.payload;
        },
        removeRequestData:(state,action)=>{
            const newArray = state.filter((r) => r._id !== action.payload);
            return newArray;
        }
    }
});


export const {addRequestData,removeRequestData} = RequestSlice.actions;

export default RequestSlice.reducer;