import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    filter: '',
  },
  reducers: {
    addItem(state, action) {
      state.items = [...state.items, action.payload];
    },
    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addItem, deleteItem, changeFilter } = contactsSlice.actions;
