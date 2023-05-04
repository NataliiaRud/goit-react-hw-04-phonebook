import { useEffect, useState } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from "./Filter/Filter";
import { AppContainer, Title, Header } from "./App.styled";
import initialContacts from "../contacts";




export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts.length > 0) {
      
      setContacts( JSON.parse(savedContacts));
    } else {
      
      setContacts( initialContacts );
    }
  },[])
  


  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts])

 
  

  const addContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name}: is already in contacts`)
    } else {
      setContacts([...contacts, newContact])
    }
    
    }
    
    

  const filterContacts = e => {
    setFilter(e.target.value)
    
  };
  
const renderContacts = () => {
  return [...contacts].filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
};


  const deleteContact = (contactId) => {
    setContacts([...contacts].filter(contact => contact.id !== contactId))
    
  };

   return (
    <AppContainer>
      <Header>Phonebook</Header>
      <ContactForm onSave={addContact} />
      <Title>Contacts</Title>
      <Filter onInput={filterContacts } />
      <ContactList contactsData={ renderContacts()} onDelete={ deleteContact}/>
    </AppContainer>
  );
};