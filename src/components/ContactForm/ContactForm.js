import { Formik } from 'formik';
import { nanoid } from 'nanoid';

import React from 'react';
import PropTypes from 'prop-types';

import { FormField, Field, Form, Button } from './ContactForm.styled';

export const ContactForm = ({ onSave }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onSave({ ...values, id: nanoid() });
          actions.resetForm();
        }}
      >
        <Form>
          <FormField htmlFor="name">Name</FormField>

          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <FormField htmlFor="number">Number</FormField>

          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
