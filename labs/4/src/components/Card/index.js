import React from 'react';
import './index.css';

class Card extends React.Component {
    render() {
      return (
        <div className = "card">
         <input type="button" value="x" className="close"
          onClick={() => this.props.clickMe(this.props.id)} />
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
      );
    }
  }
export default Card