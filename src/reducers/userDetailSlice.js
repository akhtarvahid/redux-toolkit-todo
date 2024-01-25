import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = 'https://65a1879f42ecd7d7f0a6b7ba.mockapi.io/todo';

// Get all users
export const fetchUsers = createAsyncThunk('fetchUsers', async (args, { rejectWithValue }) => {
    const response = await fetch(API_URL);
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

// Get a user
export const fetchUser = createAsyncThunk('fetchUser', async (id, { rejectWithValue }) => {
    const response = await fetch(`${API_URL}/${id}`);
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

// Delete a user
export const deleteUser = createAsyncThunk('deleteUser', async (id, { rejectWithValue }) => {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

// Create User 
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

// Update user
export const updateUser = createAsyncThunk('updateUser', async (data, { rejectWithValue }) => {
    console.log(data)
    const response = fetch(`${API_URL}/${data.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    try {
        const result = (await response).json();
        console.log(result)

        return result;
    } catch (err) {
        return rejectWithValue(err)
    }
})

export const userDetailSlice = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        user: {},
        loading: false,
        error: null,
        searchedData: []
    },
    reducers: {
        searchUser: (state, action) => {
            state.searchedData = action.payload
        }
    },
    extraReducers: (builder) => {
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
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = (action.payload);
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
        builder.addCase(deleteUser.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.filter(user => user.id !== action.payload.id)
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        builder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })

        builder.addCase(updateUser.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user);
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })


    }

})

export default userDetailSlice.reducer;

export const { searchUser } = userDetailSlice.actions