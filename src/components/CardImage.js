import { Component } from 'react';
import PropTypes from 'prop-types';

class CardImage extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <label htmlFor="image-input">
        Card Image
        <br />
        <input
          name="cardImage"
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <br />
        <br />
      </label>
    );
  }
}

CardImage.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardImage;
