import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
    const response = fetch('https://65a1879f42ecd7d7f0a6b7ba.mockapi.io/todo', {
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
        
        extraReducers: {
            [createUser.pending]: (state) => {
             state.loading = true;
     
            },
     
            [createUser.settled]: (state, action) => {
             state.loading = false;
             state.users.push(action.payload);
            },
     
            [createUser.rejected]: (state, action)=> {
             state.loading = false;
             state.users = action.payload
            }
         }
    }

})

export default userDetailSlice.reducer;