import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import PhonebookForm from './components/PhonebookForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import { Container, MainTitle, Title, Message } from './App.styled';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    contacts.some(contact => contact.name === name)
      ? toast.error(`${name} is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    toast.success('Selected contact deleted');
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <div>
        <Toaster />
      </div>
      <MainTitle>Phonebook</MainTitle>
      <PhonebookForm onSubmit={addContact} />
      {contacts.length === 0 ? (
        <Message>Your phone book is empty, enter your first contact!</Message>
      ) : (
        <>
          <Title>Contacts</Title>
          <Filter value={filter} onChange={changeFilter} />
          <ContactsList
            contacts={getFilteredContacts()}
            onDeleteContact={deleteContact}
          />
        </>
      )}
    </Container>
  );
}

export default App;
