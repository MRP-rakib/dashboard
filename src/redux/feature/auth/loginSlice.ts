import API from "@/api/api";
import { authType } from "@/types/authTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
    message:string|null,
    loading:boolean,
    error:string|null
}
export const login = createAsyncThunk('auth/admin/login',async(data:authType)=>{
    try {
        const res = await API({
            endpoint:'auth/admin/login',
            option:{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(data)
               }
        })
        if(res.token){
            localStorage.setItem('token',res.token)
        }
        return res
    } catch (error) {
        throw error
    }
})

const initialState:InitialStateTypes={
     message:null,
     loading:false,
     error:null
}
export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        clearMessage:state=>{state.message=null}
    },
    extraReducers:builder=>{
        builder.addCase(login.pending,state=>{state.loading=true})
        builder.addCase(login.fulfilled,(state,actions)=>{state.message=actions.payload.message;state.loading=false})
        builder.addCase(login.rejected,(state,actions)=>{state.message=null;state.loading=false; state.error=actions.error.message||'login failed'})

    }
})

export const {clearMessage} = loginSlice.actions
export default loginSlice.reducer