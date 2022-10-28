import { Component } from 'react';

class CardImage extends Component {
  render() {
    return (
      <label htmlFor="image-input">
        Card Image
        <br />
        <input type="text" data-testid="image-input" />
        <br />
        <br />
      </label>
    );
  }
}

export default CardImage;
