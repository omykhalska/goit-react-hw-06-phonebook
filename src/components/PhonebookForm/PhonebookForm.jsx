import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import Button from '../Button';
import { FormWrapper, Label, Input } from './PhonebookForm.styled';

const INITIAL_STATE = '';

function PhonebookForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts.items);

  const [name, setName] = useState(INITIAL_STATE);
  const [number, setNumber] = useState(INITIAL_STATE);

  const handleSubmit = e => {
    e.preventDefault();
    contacts.some(contact => contact.name === name)
      ? toast.error(`${name} is already in contacts`)
      : dispatch(addItem({ name, number, id: nanoid() }));
    reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName(INITIAL_STATE);
    setNumber(INITIAL_STATE);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <FormWrapper>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInputChange}
          />
        </Label>
        <Label>
          Phone number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </Label>
        <Button label="Add contact" type="submit" />
      </FormWrapper>
    </form>
  );
}

export default PhonebookForm;
