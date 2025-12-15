import API from "@/api/api";
import { userType } from "@/types/userType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const deleteAccount = createAsyncThunk('api/auth/change-password/:id', async (formData: userType) => {
    try {
        const token = localStorage.getItem('token')
        
        const res = API({
            endpoint: `auth/admin/delete-account/${formData._id}`,
            option: {
                method: 'DELETE',
                credentials:'include',
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

export const deleteAccountSlice = createSlice({
    name: 'deleteAccount',
    initialState,
    reducers: {
    cleardeleteAccountMessage: state => { state.message = null; state.error = null; state.loading = false }

    },
    extraReducers: builder => {
        builder.addCase(deleteAccount.pending, state => { state.loading = true })
        builder.addCase(deleteAccount.fulfilled, (state, actions) => { state.loading = false; state.error = null; state.message = actions.payload.message })
        builder.addCase(deleteAccount.rejected, (state, actions) => { state.loading = false; state.message = null; state.error = actions.error.message || 'password change error' })
    }
})

export const {cleardeleteAccountMessage} = deleteAccountSlice.actions
export default deleteAccountSlice.reducer