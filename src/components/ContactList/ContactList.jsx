import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.reducer';
import { Notify } from 'notiflix';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contactsStore.contacts);

  const filter = useSelector(state => state.contactsStore.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDeleteContact = (name, id) => {
    dispatch(deleteContact(id));
    Notify.info(`Contact "${name}" deleted`);
  };

  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <a className={css.link} href={`tel:${contact.number}`}>
              {contact.name}: {contact.number}
            </a>
            <button
              className={css.button}
              onClick={() => handleDeleteContact(contact.name, contact.id)}
              title={`Delete contact "${contact.name}"`}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <h3 className={css.subtitle}>No contacts found.</h3>
      )}
    </ul>
  );
};
