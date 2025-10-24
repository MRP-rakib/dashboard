import API from "@/api/api";
import { authType } from "@/types/authTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
    message:string|null,
    loading:boolean,
    error:string|null
}
export const signin = createAsyncThunk('auth/admin/login',async(data:authType)=>{
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
            document.cookie =`token=${res.token};path=/;`
        }
        return {
            message:res.message,
            token:res.token,
            expiresIn:res.expiresIn
        }
    } catch (error) {
        throw error
    }
})

const initialState:InitialStateTypes={
     message:null,
     loading:false,
     error:null
}
export const signinSlice = createSlice({
    name:'signin',
    initialState,
    reducers:{
        clearMessage:state=>{state.message=null}
    },
    extraReducers:builder=>{
        builder.addCase(signin.pending,state=>{state.loading=true})
        builder.addCase(signin.fulfilled,(state,actions)=>{state.message=actions.payload.message;state.loading=false})
        builder.addCase(signin.rejected,(state,actions)=>{state.message=null;state.loading=false; state.error=actions.error.message||'signin failed'})

    }
})

export const {clearMessage} = signinSlice.actions
export default signinSlice.reducer