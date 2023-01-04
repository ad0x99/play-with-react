import Card from '../Card/Card.component';

import './CardList.style.css';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;

        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
};

export default CardList;
