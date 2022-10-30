import { Component } from 'react';
import PropTypes from 'prop-types';

class SuperTrunfoCheck extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="trunfo-input">
        <br />
        <input
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
        <br />
      </label>
    );
  }
}

SuperTrunfoCheck.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SuperTrunfoCheck;
