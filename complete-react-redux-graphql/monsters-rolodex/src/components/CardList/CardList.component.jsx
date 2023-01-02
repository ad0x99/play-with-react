import { Component } from 'react';
import Card from '../Card/Card.component';

import './CardList.style.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;

          return <Card id={id} name={name} email={email} />;
        })}
      </div>
    );
  }
}

export default CardList;
