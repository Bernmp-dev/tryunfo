import { Component } from 'react';
import PropTypes from 'prop-types';
import CardName from './CardName';
import CardDescription from './CardDescription';
import FirstAttribute from './FirstAttribute';
import SecondAttribute from './SecondAttribute';
import ThirdAttribute from './ThirdAttribute';
import CardImage from './CardImage';
import CardRarity from './CardRarity';
import SuperTrunfoCheck from './SuperTrunfoCheck';
import SaveButton from './SaveButton';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <CardName cardName={ cardName } onInputChange={ onInputChange } />
        <CardDescription
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />
        <FirstAttribute cardAttr1={ cardAttr1 } onInputChange={ onInputChange } />
        <SecondAttribute cardAttr2={ cardAttr2 } onInputChange={ onInputChange } />
        <ThirdAttribute cardAttr3={ cardAttr3 } onInputChange={ onInputChange } />
        <CardImage cardImage={ cardImage } onInputChange={ onInputChange } />
        <CardRarity cardRare={ cardRare } onInputChange={ onInputChange } />
        <SuperTrunfoCheck cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />
        <SaveButton
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
