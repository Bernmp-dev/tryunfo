import { Component } from 'react';
import PropTypes from 'prop-types';

class CardDescription extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <label htmlFor="description-input">
        Descrição
        <br />
        <input
          name="cardDescription"
          type="textarea"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <br />
        <br />
      </label>
    );
  }
}

CardDescription.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardDescription;
