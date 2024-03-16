import React from 'react';
import css from './ContactItem.module.css';

import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/operations';

const ContactItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.li}>
      <span>
        {name}:{phone}
      </span>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
