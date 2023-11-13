import { miyagi } from 'ldrs';

miyagi.register();

const Spinner = () => (
  <div
    style={{
      width: '100px',
      margin: 'auto',
      display: 'block',
      paddingTop: '200px',
    }}
  >
    <l-miyagi size="35" stroke="3.5" speed="0.9" color="#ff6a95"></l-miyagi>
  </div>
);

export default Spinner;
