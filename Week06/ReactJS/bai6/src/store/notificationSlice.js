import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
    type: 'info', 
    isVisible: false,
  },
  reducers: {
    showToast: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type || 'info';
      state.isVisible = true;
    },
    hideToast: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showToast, hideToast } = notificationSlice.actions;

let timeoutId = null; 

export const triggerToast = (message, type = 'info') => (dispatch) => {
  dispatch(showToast({ message, type }));

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    dispatch(hideToast());
  }, 3000);
};

export default notificationSlice.reducer;