import { cardio, miyagi } from 'ldrs';

miyagi.register();
cardio.register();

const Spinner = ({ cardio }) => (
  <div
    style={{
      width: '100px',
      margin: 'auto',
      display: 'block',
      paddingTop: '200px',
    }}
  >
    {cardio ? (
      <l-cardio size="50" stroke="4" speed="2" color="#ff6a95"></l-cardio>
    ) : (
      <l-miyagi size="35" stroke="3.5" speed="0.9" color="#ff6a95"></l-miyagi>
    )}
  </div>
);

export default Spinner;
