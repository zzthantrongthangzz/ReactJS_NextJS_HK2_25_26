import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearResults: (state) => {
      state.results = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearResults } = searchSlice.actions;
export default searchSlice.reducer;