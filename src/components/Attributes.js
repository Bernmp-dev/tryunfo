import { Component } from 'react';
import PropTypes from 'prop-types';

class Attributes extends Component {
  render() {
    const { htmlForIn, attTitle, nameIn, typeIn,
      dataTestid, valueIn, onInputChange } = this.props;
    return (
      <label htmlFor={ htmlForIn }>
        { attTitle }
        <br />
        <input
          name={ nameIn }
          type={ typeIn }
          data-testid={ dataTestid }
          value={ valueIn }
          onChange={ onInputChange }
        />
        <br />
        <br />
      </label>
    );
  }
}

Attributes.propTypes = {
  htmlForIn: PropTypes.string.isRequired,
  attTitle: PropTypes.string.isRequired,
  nameIn: PropTypes.string.isRequired,
  typeIn: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  valueIn: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Attributes;
