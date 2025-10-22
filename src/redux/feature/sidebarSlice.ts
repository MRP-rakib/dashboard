import { createSlice } from "@reduxjs/toolkit";
interface sidebarsliceType {
    
    isOpen:boolean
}
const initialState:sidebarsliceType={
    isOpen:true
}
const sidebarSlice = createSlice({
    name:"sidebar",
    initialState,
    reducers:{
      toggleSidebar:(state)=>{state.isOpen = !state.isOpen}
    }
})

export const {toggleSidebar} = sidebarSlice.actions
export default sidebarSlice.reducer