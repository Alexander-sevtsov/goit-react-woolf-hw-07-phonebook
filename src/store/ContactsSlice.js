import { createSlice } from '@reduxjs/toolkit';

import {
  handleAllFullfieldContacts,
  handlePending,
  handleRejected,
  handleCreateNewContact,
  handleDeletContactById,
} from './handlers';
import {
  createNewContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      return {
        ...state,
        filter: payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createNewContactThunk.fulfilled, handleCreateNewContact)
      .addCase(getAllContactsThunk.fulfilled, handleAllFullfieldContacts)
      .addCase(deleteContactThunk.fulfilled, handleDeletContactById)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
