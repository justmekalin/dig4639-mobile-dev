  
import React from 'react';
import './App.css';
import ContactList from './components/contactList';
import ContactAdd from './components/contactAdd';
import ContactProfile from './components/contactProfile';
import ContactRemove from './components/contactRemove';

class App extends React.Component {
  render() {
    return (
      <div>
        <ContactList />
        <br />
        <ContactAdd />
        <br />
        <ContactProfile />
        <br />
        <ContactRemove />
        <br />
      </div>
    );
  }
}

export default App;