import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;

export const getContacts = state => {
  console.log(state.contacts.items);
  return state.contacts.items;
};

export const getLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    console.log(contacts);

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
