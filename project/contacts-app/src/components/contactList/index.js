import React from "react";

class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {contacts: []};
    this.profile = React.createRef();
  }

  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/contacts", 
    {
      headers: {API: "paengwan"}
    })
    .then((res) => res.json())
    .then((data, ) => {
        console.log(data)
      this.setState({contacts: data.contacts});
    });
  }

  render() {
    return (
      <div class="card"> <h2>Contact List</h2>
        
       {this.state.contacts.map((value, index) => {
          return <p key={index}>{value.name}, {value.number}</p>;
        })
       }
      </div>
    );
  }
}

export default ContactList;