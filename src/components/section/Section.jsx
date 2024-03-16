import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      {title && <h1 className={css.h1}>{title}</h1>}
      {children}
    </>
  );
};

export default Section;
