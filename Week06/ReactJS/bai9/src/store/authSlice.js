import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialToken = localStorage.getItem('app-token') || null;

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) throw new Error('Sai tài khoản hoặc mật khẩu!');
      const data = await response.json();
      
      localStorage.setItem('app-token', data.token);
      return data; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProtectedData = createAsyncThunk(
  'auth/fetchProtectedData',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      
      const response = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      });

      if (!response.ok) throw new Error('Token không hợp lệ hoặc đã hết hạn!');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: initialToken,
    loading: false,
    error: null,
    protectedData: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.protectedData = null;
      localStorage.removeItem('app-token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProtectedData.fulfilled, (state, action) => {
        state.protectedData = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;