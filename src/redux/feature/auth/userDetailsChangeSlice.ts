import API from "@/api/api";
import { authType } from "@/types/authTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const changeUserInfoThunk = createAsyncThunk('api/auth/admin/profile', async (formData: authType) => {
    try {
        const token = localStorage.getItem('token')
        const res = API({
            endpoint: 'auth/admin/profile',
            option: {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            }
        })
        return res
    } catch (error) {
        throw error
    }
})

interface InitialStateTypes {
    message: string | null,
    loading: boolean,
    error: string | null,

}

const initialState: InitialStateTypes = {
    message: null,
    loading: false,
    error: null
}

export const changeUserInfoSlice = createSlice({
    name: 'changeUserInfo',
    initialState,
    reducers: {
        clearUserInfo: state => { state.message = null; state.error = null; state.loading = false }
    },
    extraReducers: builder => {
        builder.addCase(changeUserInfoThunk.pending, state => { state.loading = true })
        builder.addCase(changeUserInfoThunk.fulfilled, (state, actions) => { state.loading = false; state.error = null; state.message = actions.payload.message })
        builder.addCase(changeUserInfoThunk.rejected, (state, actions) => { state.loading = false; state.message = null; state.error = actions.error.message || '' })
    }
})

export const { clearUserInfo } = changeUserInfoSlice.actions
export default changeUserInfoSlice.reducer