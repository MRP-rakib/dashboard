import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    dark:boolean
}
const initialState:ThemeState={
    dark:typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
}
const darkmode = createSlice({
    name:'darkmode',
    initialState,
    reducers:{
       toggleTheme:state=>{state.dark = !state.dark
        localStorage.setItem('theme',state.dark?'dark':'light')
       }
    }
})

export const {toggleTheme} = darkmode.actions
export default darkmode.reducer