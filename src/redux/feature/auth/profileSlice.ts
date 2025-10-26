import API from "@/api/api";
import { authType } from "@/types/authTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface InitialStateTypes {
    user: authType | null,
    loading: boolean,
    error: string | null,
    token?: string | null
}
export const fetchProfile = createAsyncThunk('auth/admin/profile', async () => {
    try {
        const token = localStorage.getItem('token')
        if (!token) throw new Error('token is not found')
        const data = await API({
            endpoint: 'auth/admin/profile',
            option: {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            }

        })
        return data
    } catch (error) {
        throw error
    }
})

const initialState: InitialStateTypes = {
    user: null,
    error: null,
    loading: false,

}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        logout: state => { state.user = null; localStorage.removeItem('token'); document.cookie = 'token=;path=/' }
    },
    extraReducers: builder => {
        builder.addCase(fetchProfile.pending, state => { state.loading = true })
        builder.addCase(fetchProfile.fulfilled, (state, actions) => { state.loading = false; state.user = actions.payload; })
        builder.addCase(fetchProfile.rejected, (state, actions) => { ; state.loading = false; state.user = null; state.error = actions.error.message || null })
    }
})

export const { logout } = profileSlice.actions
export default profileSlice.reducer