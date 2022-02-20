import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { Label, Input } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Label>
  );
}

export default Filter;
