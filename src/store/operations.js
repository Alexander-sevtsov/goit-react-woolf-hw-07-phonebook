import { createNewContact, deleteContact, getAllContacts } from 'API/API';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    try {
      const data = await getAllContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createNewContactThunk = createAsyncThunk(
  'contacts/createNewContact',
  async (newContact, thunkAPI) => {
    try {
      const data = await createNewContact(newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactThunk',
  async (id, thunkAPI) => {
    try {
      const data = await deleteContact(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
