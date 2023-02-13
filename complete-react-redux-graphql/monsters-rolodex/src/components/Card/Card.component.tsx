import { Monster } from '../../App';
import './Card.style.css';

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;

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
};

export default Card;
