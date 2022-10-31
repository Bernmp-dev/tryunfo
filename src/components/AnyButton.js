import { Component } from 'react';
import PropTypes from 'prop-types';

class SaveButton extends Component {
  render() {
    const { keyIn, nameIn, dataTestId, disableIn, onClickIn, buttonTitle } = this.props;
    return (
      <>
        <br />
        <button
          key={ keyIn }
          name={ nameIn }
          type="button"
          data-testid={ dataTestId }
          disabled={ disableIn }
          onClick={ onClickIn }
        >
          { buttonTitle }
        </button>
      </>
    );
  }
}

SaveButton.propTypes = {
  keyIn: PropTypes.string.isRequired,
  nameIn: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  disableIn: PropTypes.bool.isRequired,
  onClickIn: PropTypes.func.isRequired,
};

export default SaveButton;
