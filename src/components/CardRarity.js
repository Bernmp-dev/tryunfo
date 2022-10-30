import { Component } from 'react';
import PropTypes from 'prop-types';

class CardRarity extends Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <label htmlFor="rare-input">
        Raridade
        <br />
        <select
          name="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal" onChange={ onInputChange }>normal</option>
          <option value="raro" onChange={ onInputChange }>raro</option>
          <option value="muito raro" onChange={ onInputChange }>muito raro</option>
        </select>
        <br />
      </label>
    );
  }
}

CardRarity.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardRarity;
