import axios from 'axios';

const BASE_URL = 'https://65f579e541d90c1c5e099249.mockapi.io/contacts/';

export const getAllContacts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createNewContact = async newContact => {
  const response = await axios.post(BASE_URL, newContact);
  return response.data;
};

export const deleteContact = async contactId => {
  const response = await axios.delete(`${BASE_URL}${contactId}`);
  return response.data;
};
