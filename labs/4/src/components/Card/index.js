import React from 'react';
import './index.css';

class Card extends React.Component {
    render() {
      return (
        <div className="card">
          <h3>{this.props.title}</h3>
          <p>{this.props.content}</p>
          <input type="button" value="x" className="close" //delete card
            onClick={() => this.props.clickMe(this.props.id)} />
        </div>
      );
    }
  }
export default Card