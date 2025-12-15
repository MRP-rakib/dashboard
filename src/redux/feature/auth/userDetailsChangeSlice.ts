import API from "@/api/api";
import { userType } from "@/types/userType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateUser = createAsyncThunk('api/auth/admin/profile', async (formData: userType) => {
    try {
        const token = localStorage.getItem('token')
        const res = API({
            endpoint: `auth/admin/update-user/${formData._id}`,
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
        builder.addCase(updateUser.pending, state => { state.loading = true })
        builder.addCase(updateUser.fulfilled, (state, actions) => { state.loading = false; state.error = null; state.message = actions.payload.message })
        builder.addCase(updateUser.rejected, (state, actions) => { state.loading = false; state.message = null; state.error = actions.error.message || '' })
    }
})

export const { clearUserInfo } = changeUserInfoSlice.actions
export default changeUserInfoSlice.reducer