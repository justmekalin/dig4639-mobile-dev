import React from 'react';

class ContactsApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      contacts: []
    };
  }

  componentDidMount() {
    this.getProfile();
    this.getContacts();
  }

  add = (event) => {
    event.preventDefault();
    fetch('http://plato.mrl.ai:8080/contacts/add', {
      method: 'POST',
      body: JSON.stringify({
        name: this.refs.name.value,
        number: this.refs.number.value
      }),
      headers: { "Content-type": "application/json", API: "paengwan" }
    })
      .then(res => { return res.json() })
      .then(() => {
        this.getProfile();
        this.getContacts();
      });
  }

  getContacts() {
    window.fetch("http://plato.mrl.ai:8080/contacts", {
      headers: { API: "paengwan" }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contacts: data.contacts });
        console.log(data)
      });
  }

  getProfile() {
    window.fetch("http://plato.mrl.ai:8080/profile", {
      headers: { API: "paengwan" }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ profile: data });
        console.log(data)
      });
  }

  remove = (index) => {
    fetch('http://plato.mrl.ai:8080/contacts/remove', {
      method: 'POST',
      body: JSON.stringify({ position: index }),
      headers: { "Content-type": "application/json", API: "paengwan" }
    })
      .then(res => { return res.json() })
      .then(() => {
        this.getProfile();
        this.getContacts();
      });
  }

  render() {
    return (
      <div>
        <div class="card">
            <div>
                <h2>Profile</h2>
                 
                    <p>{this.state.profile.name}</p>
                    <p>{this.state.profile.count}</p>
                  
                
        
            </div>
            <br />
            <div>
              <fieldset>
                <h2>Add Contact</h2>
                <form onSubmit={this.add}>
                  <input ref="name" type='text' placeholder='Full Name' />
                  <input ref="number" type='text' placeholder='Phone Number' />
                  <br />
                  <button type="submit">ADD</button>
                </form>
              </fieldset>
            </div>
          

          <div className="right">
            <fieldset className="contacts">
              <h2>Contacts</h2>
              {this.state.contacts.map((value, index) => {
                return (
                  <fieldset className="card">
                    <h4>{value.name}</h4>
                    <p>{value.number} </p>
                    <div className="buttondiv">
                      <button type="submit"
                        onClick={() => this.remove(index)}
                        id={index}>REMOVE
                                    </button>
                    </div>
                  </fieldset>);
              })
              }
            </fieldset>
          </div>
        </div>
        <br />
        <br />
      </div>


    );
  }

}
export default ContactsApp;