const Person = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { className: 'title' }, 'React IS rendered'),
    React.createElement(
      Person,
      { name: 'Thomas', occupation: 'Software Engineer' },
      null
    ),
    React.createElement(
      Person,
      { name: 'Ashley', occupation: 'Software Engineer' },
      null
    ),
  ]);
};

// Before React v18
// ReactDOM.render(React.createElement(App), document.getElementById('root'));

// Updated React v18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
