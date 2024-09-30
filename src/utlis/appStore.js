import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import RequestReducer  from "./requestSlice";
import ConnectionReducer from "./connectionSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        request:RequestReducer,
        connection:ConnectionReducer
    }
});

export default appStore;