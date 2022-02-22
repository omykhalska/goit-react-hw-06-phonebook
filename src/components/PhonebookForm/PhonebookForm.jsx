import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/contactsSlice';
import { getItems } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import Button from '../Button';
import { FormWrapper, Label, Input, ErrorText } from './PhonebookForm.styled';

function PhonebookForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);

  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = ({ name, number }) => {
    contacts.some(contact => contact.name === name)
      ? toast.error(`${name} is already in contacts`)
      : dispatch(addItem({ name, number, id: nanoid() }));
    reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <Label>
          Name
          <Input
            type="text"
            {...register('name', {
              required: '❌ The field cannot be empty!',
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/gi,
                message:
                  "❌ Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
              },
            })}
          />
        </Label>
        <div>
          {errors?.name && (
            <ErrorText>
              {errors?.name.message || 'An error has occurred...'}
            </ErrorText>
          )}
        </div>

        <Label>
          Phone number
          <Input
            type="tel"
            {...register('number', {
              required: '❌ The field cannot be empty!',
              pattern: {
                value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,
                message:
                  '❌ Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
              },
              minLength: {
                value: 5,
                message: '❌ Phone number must contain 5 digits minimum',
              },
            })}
          />
        </Label>
        <div>
          {errors?.number && (
            <ErrorText>
              {errors?.number.message || 'An error has occurred...'}
            </ErrorText>
          )}
        </div>
        <Button label="Add contact" type="submit" disabled={!isValid} />
      </FormWrapper>
    </form>
  );
}

export default PhonebookForm;
