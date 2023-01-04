import './Card.style.css';

const Card = ({ id, name, email }) => {
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
