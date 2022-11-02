import React from 'react';
import './style.css';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/AnyButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      storedCards: [],
      filteredCards: [],
      trunfoFilter: false,
    };
  }

  initialState = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const max = 90;
    const maxSum = 210;

    const nameField = cardName.length > 0;
    const imgfield = cardImage.length > 0;
    const descriptionField = cardDescription.length > 0;
    const att1Length = cardAttr1.length > 0;
    const att1MinMax = cardAttr1 >= 0 && cardAttr1 <= max;
    const att2MinMax = cardAttr2 >= 0 && cardAttr2 <= max;
    const att3MinMax = cardAttr3 >= 0 && cardAttr3 <= max;
    const maxAtt = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxSum;

    return nameField
    && imgfield
    && descriptionField
    && att1MinMax
    && att1Length
    && att2MinMax
    && att3MinMax
    && maxAtt;
  };

  onSaveButtonClick = () => {
    const { storedCards } = this.state;
    this.setState((newState = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo }) => ({
      storedCards: [
        ...storedCards,
        { ...newState,
        }],
      filteredCards: [
        ...storedCards,
        { ...newState,
        }],
    }));

    this.initialState();
  };

  hasTrunfo = ({ storedCards } = this.state) => storedCards
    .some(({ cardTrunfo }) => cardTrunfo);

  RemCard = ({ target }) => {
    const { name } = target;
    const { storedCards } = this.state;
    const newStore = storedCards.filter(({ cardName }) => cardName !== name);

    this.setState({ storedCards: newStore, filteredCards: newStore });
  };

  severalFilters = ({ target }) => {
    const { storedCards, trunfoFilter } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const filteredState = storedCards
      .filter(({ cardName, cardRare, cardTrunfo }) => cardName.includes(value)
      || cardRare === value
      || cardTrunfo === value);

    if (target.name === 'trunfoFilter') this.setState({ trunfoFilter: value });
    this.setState({ filteredCards: filteredState });
    if (trunfoFilter) this.setState({ filteredCards: storedCards });
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, filteredCards, trunfoFilter } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <div className="firstContainer">
          <Form
            classIn="formContainer"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ !(this.validateButton()) }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
            hasTrunfo={ this.hasTrunfo() }
          />
          <Card
            classIn="previewContainer"
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div>
          Pesquisar:
          <input
            name="filteredCards"
            type="text"
            data-testid="name-filter"
            onChange={ this.severalFilters }
            disabled={ trunfoFilter }
          />
          <label htmlFor="rare-filter">
            Raridade:
            <select
              name="filteredCards"
              data-testid="rare-filter"
              onChange={ this.severalFilters }
              disabled={ trunfoFilter }
            >
              <option value="">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-filter">
            <input
              name="trunfoFilter"
              type="checkbox"
              value={ trunfoFilter }
              data-testid="trunfo-filter"
              onChange={ this.severalFilters }
            />
            Super Trybe Trunfo
          </label>
        </div>
        <div className="deckContainer">
          {filteredCards.map((curr, i) => (
            <div className="savedCardContainer" key={ `FullCard: ${curr.cardName} ${i}` }>
              <Card
                key={ curr.cardName }
                classIn="savedCards"
                cardName={ curr.cardName }
                cardDescription={ curr.cardDescription }
                cardAttr1={ curr.cardAttr1 }
                cardAttr2={ curr.cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ curr.cardImage }
                cardRare={ curr.cardRare }
                cardTrunfo={ curr.cardTrunfo }
              />
              <Button
                className="remCardButon"
                keyIn={ `Del${i}` }
                nameIn={ curr.cardName }
                dataTestId="delete-button"
                buttonTitle="Excluir"
                disableIn={ null }
                onClickIn={ this.RemCard }
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
