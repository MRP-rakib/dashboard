import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './sidebarSlice'
import darkModeReducer from './darkmodeSlice'

const store = configureStore({
    reducer:{
      sidebar:sidebarReducer,
      darkmode:darkModeReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>; // type of the entire Redux state
export type AppDispatch = typeof store.dispatch;  
export default store