import { Component } from 'react';

import './Card.style.css';

class Card extends Component {
  render() {
    const { id, name, email } = this.props;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2 className="monster-name">{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
