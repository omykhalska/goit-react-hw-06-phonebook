import { useSelector } from 'react-redux';
import { getItems } from './redux/selectors';
import { Toaster } from 'react-hot-toast';
import PhonebookForm from './components/PhonebookForm';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import { Container, MainTitle, Title, Message } from './App.styled';

function App() {
  const contacts = useSelector(getItems);

  return (
    <Container>
      <div>
        <Toaster />
      </div>
      <MainTitle>Phonebook</MainTitle>
      <PhonebookForm />
      {contacts.length === 0 ? (
        <Message>Your phone book is empty, enter your first contact!</Message>
      ) : (
        <>
          <Title>Contacts</Title>
          <Filter />
          <ContactsList />
        </>
      )}
    </Container>
  );
}

export default App;
