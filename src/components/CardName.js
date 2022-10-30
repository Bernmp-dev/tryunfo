import { Component } from 'react';
import PropTypes from 'prop-types';

class CardName extends Component {
  render() {
    const { cardName, onInputChange } = this.props;

    return (
      <label htmlFor="name-input">
        Name
        <br />
        <input
          name="cardName"
          type="text"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        <br />
        <br />
      </label>
    );
  }
}

CardName.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardName;
