import { Component } from 'react';
import PropTypes from 'prop-types';

class FirstAttribute extends Component {
  render() {
    const { cardAttr1, onInputChange } = this.props;
    return (
      <label htmlFor="attr1-input">
        First Attribute
        <br />
        <input
          name="cardAttr1"
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <br />
        <br />
      </label>
    );
  }
}

FirstAttribute.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FirstAttribute;
