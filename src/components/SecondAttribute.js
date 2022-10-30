import { Component } from 'react';
import PropTypes from 'prop-types';

class SecondAttribute extends Component {
  render() {
    const { cardAttr2, onInputChange } = this.props;
    return (
      <label htmlFor="attr2-input">
        Second Attribute
        <br />
        <input
          name="cardAttr2"
          type="number"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <br />
        <br />
      </label>
    );
  }
}

SecondAttribute.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SecondAttribute;
