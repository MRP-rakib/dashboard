import API from "@/api/api";
import { authType } from "@/types/authTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const changepasswordThunk = createAsyncThunk('api/auth/changepassword', async (formData: authType) => {
    try {
        const token = localStorage.getItem('token')
        const res = API({
            endpoint: 'auth/admin/profile',
            option: {
                method: 'PATCH',
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
    token?: string | null
}

const initialState: InitialStateTypes = {
    message: null,
    error: null,
    loading: false
}

export const changepasswordSlice = createSlice({
    name: 'changepassword',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(changepasswordThunk.pending, state => { state.loading = true })
        builder.addCase(changepasswordThunk.fulfilled, (state, actions) => { state.loading = false; state.error = null; state.message = actions.payload.message })
        builder.addCase(changepasswordThunk.rejected, (state, actions) => { state.loading = false; state.message = null; state.error = actions.error.message || 'password change error' })
    }
})


export default changepasswordSlice.reducer