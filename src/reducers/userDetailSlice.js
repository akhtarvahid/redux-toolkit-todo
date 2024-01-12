import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = 'https://65a1879f42ecd7d7f0a6b7ba.mockapi.io/todo';

export const fetchUser = createAsyncThunk('fetchUser', async (args, { rejectWithValue }) => {
    const response = await fetch(API_URL);
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})


export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
    const response = fetch(API_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    try {
        const result = (await response).json();
        return result;
    } catch (err) {
        return rejectWithValue(err)
    }
})

export const userDetailSlice = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
        extraReducers: (builder)=> {
            builder.addCase(createUser.pending, (state, action) => {
                state.loading = true;
            })
            builder.addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            builder.addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            builder.addCase(fetchUser.pending, (state, action) => {
                state.loading = true;
            })
            builder.addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = (action.payload);
            })
            builder.addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

        
    }

})

export default userDetailSlice.reducer;