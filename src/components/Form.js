import { Component } from 'react';
import PropTypes from 'prop-types';
import CardName from './CardName';
import CardDescription from './CardDescription';
import Attributes from './Attributes';
import CardImage from './CardImage';
import CardRarity from './CardRarity';
import SuperTrunfoCheck from './SuperTrunfoCheck';
import SaveButton from './AnyButton';

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
      hasTrunfo,
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
        <Attributes
          htmlForIn="attr1-input"
          attTitle="First Attribute"
          nameIn="cardAttr1"
          typeIn="number"
          dataTestid="attr1-input"
          valueIn={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <Attributes
          htmlForIn="attr2-input"
          attTitle="Second Attribute"
          nameIn="cardAttr2"
          typeIn="number"
          dataTestid="attr2-input"
          valueIn={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <Attributes
          htmlForIn="attr3-input"
          attTitle="Third Attribute"
          nameIn="cardAttr3"
          typeIn="number"
          dataTestid="attr3-input"
          valueIn={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <CardImage cardImage={ cardImage } onInputChange={ onInputChange } />
        <CardRarity cardRare={ cardRare } onInputChange={ onInputChange } />
        { !hasTrunfo ? (
          <SuperTrunfoCheck cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />)
          : <p>Você já tem um Super Trunfo em seu baralho</p>}
        <SaveButton
          keyIn="DelB"
          nameIn="save-button"
          buttonTitle="Save"
          dataTestId="save-button"
          disableIn={ isSaveButtonDisabled }
          onClickIn={ onSaveButtonClick }
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
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
