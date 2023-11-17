import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
};

//  <ul className={css.list}>
//     {contacts.length > 0 ? (
//       contacts.map(contact => (
//         <li key={contact.id} className={css.item}>
//           <a className={css.link} href={`tel:${contact.number}`}>
//             {contact.name}: {contact.number}
//           </a>
//           <button
//             className={css.button}
//             onClick={() => handleDeleteContact(contact.id)}
//           >
//             Delete
//           </button>
//         </li>
//       ))
//     ) : (
//       <h3 className={css.subtitle}>No contacts found.</h3>
//     )}
//   </ul>
