import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  return localStorage.getItem('app-theme') || 'light';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
      localStorage.setItem('app-theme', state.value);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;