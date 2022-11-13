import React, { Component } from 'react';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';
import Section from './Section';
import Form from './Form';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParse = JSON.parse(contacts);

    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const onContact = this.state.contacts.some(id => id.name === data.name);
    if (onContact) {
      alert(`Contact "${data.name}" is already exist.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  onDelete = deleteID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== deleteID),
    }));
  };

  handleInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div className={css.appBody}>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts
            contacts={contacts}
            filter={filter}
            imputChange={this.handleInputChange}
            onClickDelete={this.onDelete}
          />
        </Section>
      </div>
    );
  }
}

export default App;
