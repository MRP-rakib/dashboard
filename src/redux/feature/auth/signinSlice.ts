import API from "@/api/api";
import { userType } from "@/types/userType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
interface InitialStateTypes {
    message: string | null,
    loading: boolean,
    error: string | null
}
export const signin = createAsyncThunk('auth/admin/login', async (data: userType) => {
    try {
        const res = await API({
            endpoint: 'auth/admin/login',
            option: {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data),
                credentials:'include'
            }
        })
        Cookies.set('accessToken',res.accessToken)
        Cookies.set('refreshToken',res.refreshToken)
        localStorage.setItem('token',res.accessToken)
        return res
    } catch (error) {
        throw error
    }
})

const initialState: InitialStateTypes = {
    message: null,
    loading: false,
    error: null
}
export const signinSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        // clearMessage:state=>{state.message=null}
    },
    extraReducers: builder => {
        builder.addCase(signin.pending, state => { state.loading = true })
        builder.addCase(signin.fulfilled, (state, actions) => { state.message = actions.payload.message; state.loading = false })
        builder.addCase(signin.rejected, (state, actions) => { state.message = null; state.loading = false; state.error = actions.error.message || '' })

    }
})

// export const {clearMessage} = signinSlice.actions
export default signinSlice.reducer