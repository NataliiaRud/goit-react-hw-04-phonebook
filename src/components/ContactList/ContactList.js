import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactContainer,
  List,
  Item,
  ItemWrapper,
  Btn,
} from './ContactList.styled';

export const ContactList = ({ contactsData, onDelete }) => {
  return (
    <ContactContainer>
      <List>
        {contactsData.map(contact => (
          <Item key={contact.id}>
            <ItemWrapper>
              <span>{contact.name}: </span>
              <span>{contact.number}</span>

              <Btn type="button" onClick={() => onDelete(contact.id)}>
                Delete
              </Btn>
            </ItemWrapper>
          </Item>
        ))}
      </List>
    </ContactContainer>
  );
};
ContactList.propTypes = {
  contactsData: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
