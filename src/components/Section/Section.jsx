import React from 'react';
import Container from 'components/Container';
import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <div className={css.section}>
      <Container
        styles={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px',
          borderRadius: '10px',
          backgroundColor: 'rgb(126, 250, 209)',
          boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.6)',
        }}
      >
        <h2>{title}</h2>
        {children}
      </Container>
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string,
};

export default Section;
