import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact';
import { ContactList } from './ContactsList.styled';

function ContactsList() {
  const filter = useSelector(({ contacts }) => contacts.filter);
  const normalizedFilter = filter.toLowerCase();

  const contacts = useSelector(({ contacts }) => contacts.items);
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
