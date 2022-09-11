import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSlice } from '../../redux';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(filterSlice.getFilter);

  const changeFilter = e => {
    dispatch(filterSlice.filterItems(e.currentTarget.value));
  };

  return (
    <label className={css.label}>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={changeFilter}
        className={css.input}
      />
    </label>
  );
};

export default Filter;
