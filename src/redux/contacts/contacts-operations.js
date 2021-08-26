import axios from 'axios';
import actions, {
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeFilter,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from '../contacts/contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError());
  }
};

export const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('./contacts', contact);
    dispatch({ type: 'contacts/addContactSuccess', payload: data });
  } catch (error) {
    dispatch(addContactError());
  }
};

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

export const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError());
  }
};

const operations = {
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeFilter,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};

export default operations;
