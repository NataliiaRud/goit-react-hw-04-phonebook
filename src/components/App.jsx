import { Component } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from "./Filter/Filter";
import { AppContainer, Title, Header } from "./App.styled";
import initialContacts from "../contacts";


export class App extends Component {
  state = {
  contacts: [],
  filter: '',
  }
  
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      
      this.setState({ contacts: initialContacts });
    }}
  componentDidUpdate(prevProps, prevState) { if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }}
  

  addContact = newContact => {
    
    if (this.state.contacts.find(contact=> contact.name === newContact.name)) {
      return alert(`${newContact.name}: is already in contacts`)
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }))
    }
  }
 
  filterContacts = e => {
    this.setState({filter: e.target.value})
    };
  renderContacts = () => {
    return [...this.state.contacts].filter(contact=>contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))  
  }


  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render()
 { return (
    <AppContainer>
      <Header>Phonebook</Header>
      <ContactForm onSave={this.addContact} />
      <Title>Contacts</Title>
      <Filter onInput={ this.filterContacts } />
      <ContactList contactsData={ this.renderContacts()} onDelete={ this.deleteContact}/>
    </AppContainer>
  )};
};
