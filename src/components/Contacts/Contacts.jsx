import React, { Component } from 'react';
import Notification from 'components/Notification';
import Input from 'components/Input';
import css from './Contacts.module.css';
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    const { imputChange } = this.props;
    const { onClickDelete } = this.props;
    const { filter, contacts } = this.props;
    const mormolizedFilter = filter.toLowerCase();
    const getFilter = contacts.filter(onFilter =>
      onFilter.name.toLowerCase().includes(mormolizedFilter)
    );

    return (
      <div>
        <Input
          label="Find contacts by name"
          value={filter}
          onChange={imputChange}
          type="text"
          name="filter"
        />

        {!getFilter.length ? (
          <Notification message="Contact list is empty !" />
        ) : (
          <ul className={css.contactsItem}>
            {getFilter.map(({ id, name, number }) => (
              <li key={id} className={css.contactsList}>
                <span className={css.contactsName}>Name: {name}</span>
                <span className={css.contactsNumber}>Tel: {number}</span>
                <button
                  className={css.contactsBtn}
                  type="button"
                  onClick={() => onClickDelete(id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default Contacts;
