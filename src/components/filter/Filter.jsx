import React from 'react';
import css from './Filter.module.css';
import { setFilter } from '../../store/ContactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'store/Selector';

const Filter = () => {
  const filter = useSelector(filterSelector);

  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <fieldset className={css.filter}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </fieldset>
  );
};

export default Filter;
