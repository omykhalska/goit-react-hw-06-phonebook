import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact';
import { ContactList } from './ContactsList.styled';
import { getItems, getFilter } from '../../redux/selectors';

function ContactsList() {
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();

  const contacts = useSelector(getItems);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactList>
      {filteredContacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
    </ContactList>
  );
}

export default ContactsList;
