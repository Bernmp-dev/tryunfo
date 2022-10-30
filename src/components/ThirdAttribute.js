import { Component } from 'react';
import PropTypes from 'prop-types';

class ThirdAttribute extends Component {
  render() {
    const { cardAttr3, onInputChange } = this.props;
    return (
      <label htmlFor="attr3-input">
        Third Attribute
        <br />
        <input
          name="cardAttr3"
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <br />
        <br />
      </label>
    );
  }
}

ThirdAttribute.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default ThirdAttribute;
