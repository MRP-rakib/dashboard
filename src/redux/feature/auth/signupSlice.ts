import API from "@/api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  {authType}  from "@/types/authTypes";

interface InitialStateTypes {
    message:string|null,
    loading:boolean,
    error:string|null
}
export const signup = createAsyncThunk('auth/admin/signup',async(Data:authType)=>{
    try {
        const res = await API({
            endpoint:'auth/admin/signup',
            option:{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(Data)
            }
        })
        return res
    } catch (error) {
        throw error
        
    }
})


const initialState:InitialStateTypes ={
    message:null,
    loading:false,
    error:null

}
const signupSlice = createSlice({
    name:'signup',
    initialState,
    reducers:{
         clearMessage:state=>{state.message = null}
    },
    extraReducers:builder=>{
        builder.addCase(signup.pending,state=>{state.loading=true;state.error=null})
        builder.addCase(signup.fulfilled,(state,actions)=>{state.loading=false;state.message=actions.payload.message;state.error=null})
        builder.addCase(signup.rejected,(state,actions)=>{state.loading=false;state.message=null;state.error=actions.error.message||'signup failed'})
    }
})

export const {clearMessage} = signupSlice.actions
export default signupSlice.reducer