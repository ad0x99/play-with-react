import { Component } from 'react';

import './SearchBox.style.css';

class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;

    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
