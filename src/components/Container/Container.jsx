import React from 'react';
import css from './Container.module.css';

const Container = ({ children, styles }) => {
  return (
    <div className={css.container} style={styles}>
      {children}
    </div>
  );
};

export default Container;
