import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './feature/sidebarSlice'
import darkModeReducer from './feature/darkmodeSlice'
import signupReducer from './feature/auth/signupSlice'
import loginReducer from './feature/auth/signinSlice'
import profileReducer from './feature/auth/profileSlice'
import changepasswordReducer from "./feature/auth/changepasswordSlice";
import  changeUserInfoReducer  from "./feature/auth/userDetailsChangeSlice";


const store = configureStore({
    reducer:{
      sidebar:sidebarReducer,
      darkmode:darkModeReducer,
      signup : signupReducer,
      login:loginReducer,
      profile:profileReducer,
      changepassword:changepasswordReducer,
      changeUserInfo:changeUserInfoReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>; // type of the entire Redux state
export type AppDispatch = typeof store.dispatch;  
export default store