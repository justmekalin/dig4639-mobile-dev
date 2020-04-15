  
import React from 'react';
import './App.css';
import ContactsApp from './components/ContactsApp';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts App</h1>
        <ContactsApp />
      </div>
    );
  }
}

export default App;