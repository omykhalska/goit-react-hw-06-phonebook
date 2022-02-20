import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import Button from '../Button';
import { ContactItem } from './Contact.styled';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(deleteItem(id));
    toast.success('Selected contact deleted');
  };

  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <Button label="Delete" type="submit" onClick={deleteContact} />
    </ContactItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
