import { Component } from 'react';

class CardName extends Component {
  render() {
    return (
      <label htmlFor="name-input">
        Name
        <br />
        <input type="text" data-testid="name-input" />
        <br />
        <br />
      </label>
    );
  }
}

export default CardName;
