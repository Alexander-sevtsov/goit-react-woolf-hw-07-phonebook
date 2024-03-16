export const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = null;
};
export const handleRejected = (state, { error }) => {
  state.contacts.isLoading = false;
  state.contacts.error = error;
};
export const handleAllFullfieldContacts = (state, { payload }) => {
  state.contacts.items = payload;
        state.contacts.isLoading = false;
};

export const handleCreateNewContact = (state, { payload }) => {
  state.contacts.items = [payload, ...state.contacts.items];
        state.contacts.isLoading = false;
};

export const handleDeletContactById = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter(item => item.id !== payload.id);
        state.contacts.isLoading = false;
};
