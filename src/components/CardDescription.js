import { Component } from 'react';

class CardDescription extends Component {
  render() {
    return (
      <label htmlFor="description-input">
        descrição
        <br />
        <input type="textarea" data-testid="description-input" />
        <br />
        <br />
      </label>
    );
  }
}

export default CardDescription;
