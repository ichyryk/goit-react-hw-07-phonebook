import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from 'services/contacts-api';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchContacts();
      console.log(typeof data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async ({ name, number }, { rejectWithValue }) => {
    try {
      const newContact = {
        name,
        number,
      };
      const { data } = await fetchAddContact(newContact);
      // axios.post('./contacts', newContact)
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

//
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteContact(id);
      // axios.delete(`./contacts/${id}`)

      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// const operations = {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
// };

// export default operations;

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get('/contacts');

//     dispatch(fetchContactSuccess(data));
//     console.log(data);
//   } catch (error) {
//     dispatch(fetchContactError());
//   }
// };

// export const addContact = (name, number) => dispatch => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(actions.addContactRequest());

//   axios
//     .post('./contacts', contact)
//     .then(({ data }) =>
//       dispatch({ type: 'contacts/addContactSuccess', payload: data }),
//     )
//     .catch(error => dispatch(addContactError()));
// };
