import React from 'react';
import PropTypes from 'prop-types';

import { FilterContainer, FilterInput } from './Filter.styled';
export const Filter = ({ onInput }) => {
  return (
    <FilterContainer>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        //   value={aaa}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onInput}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  onInput: PropTypes.func.isRequired,
};
