import { Component } from 'react';

class SuperTrunfoCheck extends Component {
  render() {
    return (
      <label htmlFor="trunfo-input">
        <br />
        <input type="checkbox" data-testid="trunfo-input" />
        Super Trybe Trunfo
      </label>
    );
  }
}

export default SuperTrunfoCheck;
