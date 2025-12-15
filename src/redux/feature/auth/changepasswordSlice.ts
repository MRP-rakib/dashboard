import API from "@/api/api";
import { userType } from "@/types/userType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const changepasswordThunk = createAsyncThunk('api/auth/change-password/:id', async (formData: userType) => {
    try {
        const token = localStorage.getItem('token')
        
        const res = API({
            endpoint: `auth/admin/change-password/${formData._id}`,
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
    reducers: {
    clearUserMessage: state => { state.message = null; state.error = null; state.loading = false }

    },
    extraReducers: builder => {
        builder.addCase(changepasswordThunk.pending, state => { state.loading = true })
        builder.addCase(changepasswordThunk.fulfilled, (state, actions) => { state.loading = false; state.error = null; state.message = actions.payload.message })
        builder.addCase(changepasswordThunk.rejected, (state, actions) => { state.loading = false; state.message = null; state.error = actions.error.message || 'password change error' })
    }
})

export const {clearUserMessage} = changepasswordSlice.actions
export default changepasswordSlice.reducer