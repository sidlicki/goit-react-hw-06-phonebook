import { createSlice } from '@reduxjs/toolkit';

const exampleConacts = [
  { id: 'id-1', name: 'Joe Biden', number: '+1-800-375-5283' },
  { id: 'id-2', name: 'Naruhito 徳仁', number: '+81-354-74-97-70' },
  { id: 'id-3', name: 'Frank-Walter Steinmeier', number: '+49-30-28-88-71-28' },
  { id: 'id-4', name: 'Rishi Sunak', number: ' +44-0-131-556-0023' },
  { id: 'id-5', name: 'Emmanuel Macron', number: '+33-1-43-06-07-37' },
  { id: 'id-6', name: 'Sergio Mattarella', number: '+39-06-8200-3641' },
  { id: 'id-7', name: 'Justin Trudeau', number: '+1-613-230-29-61' },
];

const initialState = {
  contacts: exampleConacts,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
